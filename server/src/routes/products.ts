import type { Request, Response, Router } from "express";
import { Op, type Includeable } from "sequelize";
import {
  sequelize,
  Brand,
  Category,
  Product,
  ProductImage,
} from "../models/index.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../utilities/validate.js";
import { paginate } from "../utilities/pagination.js";
import { buildProductWhere } from "../services/productFilters.js";
import { parseId } from "../utilities/parseId.js";
import { findOrFail } from "../utilities/findOrFail.js";
import { HttpError } from "../utilities/httpError.js";
import {
  productQuerySchema,
  productCreateSchema,
  productUpdateSchema,
  type ProductQuery,
} from "../types/validators.js";

// Every product response includes its category, brand, and images.
const includeAll: Includeable[] = [
  { model: Category, as: "category" },
  { model: Brand, as: "brand" },
  { model: ProductImage, as: "images" },
];

// Reads one product back with its associations attached - the shape every
// single-product response returns. 404s if the id doesn't exist.
function findFullProduct(id: number): Promise<Product> {
  return findOrFail(Product, id, "Product", { include: includeAll });
}

/**
 * Layers a free-text match (title, brand name, or category name) onto the
 * filter-based `where`. Rather than filtering across the association
 * columns directly (which conflicts with Sequelize's automatic pagination
 * subquery once a hasMany include like `images` is involved), matching
 * brand/category ids are resolved first with two small lookups, then
 * folded into a plain Product-only `where`.
 */
async function withSearch(query: ProductQuery, q: string) {
  const pattern = `%${q}%`;
  const [matchingBrands, matchingCategories] = await Promise.all([
    Brand.findAll({ where: { name: { [Op.like]: pattern } }, attributes: ["id"] }),
    Category.findAll({
      where: { name: { [Op.like]: pattern } },
      attributes: ["id"],
    }),
  ]);

  return {
    ...buildProductWhere(query),
    [Op.or]: [
      { title: { [Op.like]: pattern } },
      ...(matchingBrands.length
        ? [{ brandId: matchingBrands.map((b) => b.id) }]
        : []),
      ...(matchingCategories.length
        ? [{ categoryId: matchingCategories.map((c) => c.id) }]
        : []),
    ],
  };
}

// GET /api/products - the one product-browsing endpoint: pagination, every
// filter, and an optional free-text `q`, all combinable. There's no
// separate route per brand/category/gender - the frontend maps its own
// clean URLs (/mens, /brands/nike, ...) to query params against this.
async function listProducts(req: Request, res: Response): Promise<void> {
  const query = validate(productQuerySchema, req.query);

  const where = query.q ? await withSearch(query, query.q) : buildProductWhere(query);
  res.json(
    await paginate(Product, query, {
      where,
      include: includeAll,
      order: [["id", "ASC"]],
    }),
  );
}

async function getProductById(req: Request, res: Response): Promise<void> {
  const id = parseId(req);

  res.json(await findFullProduct(id));
}

async function createProduct(req: Request, res: Response): Promise<void> {
  const data = validate(productCreateSchema, req.body);
  const { images, ...fields } = data;

  // One transaction so a product is never left committed without the images
  // that were posted alongside it.
  const product = await sequelize.transaction(async (transaction) => {
    const created = await Product.create(fields, { transaction });

    if (images.length) {
      await ProductImage.bulkCreate(
        images.map((url) => ({ url, productId: created.id })),
        { transaction },
      );
    }
    return created;
  });

  res.status(201).json(await findFullProduct(product.id));
}

async function updateProduct(req: Request, res: Response): Promise<void> {
  const id = parseId(req);
  const data = validate(productUpdateSchema, req.body);
  const product = await findOrFail(Product, id, "Product");

  const { images, ...fields } = data;

  await sequelize.transaction(async (transaction) => {
    await product.update(fields, { transaction });

    // Images have no identity beyond "belongs to this product + a URL", so a
    // full replace is simpler and safer than diffing old vs. new URLs. The
    // transaction is what stops a failed re-insert from leaving the product
    // with the old images already deleted.
    if (images !== undefined) {
      await ProductImage.destroy({ where: { productId: id }, transaction });

      if (images.length) {
        await ProductImage.bulkCreate(
          images.map((url) => ({ url, productId: id })),
          { transaction },
        );
      }
    }
  });

  res.json(await findFullProduct(id));
}

async function deleteProduct(req: Request, res: Response): Promise<void> {
  const id = parseId(req);

  const deleted = await Product.destroy({ where: { id } });
  if (!deleted) throw new HttpError(404, "Product not found");

  res.json({ message: "Product deleted" });
}

export function registerProductsRoutes(app: Router) {
  // Order matters: "search" is a literal path, so it must be registered
  // before the ":id" wildcard route, or a request to /api/products/search
  // would incorrectly match ":id" with id="search" first. Kept as an alias
  // of the same handler - a discoverable, more explicit name for exactly
  // the same query (?q=... is optional on /api/products either way).
  app.get("/api/products", listProducts);
  app.get("/api/products/search", listProducts);
  app.get("/api/products/:id", getProductById);

  app.post("/api/admin/products", requireAuth, createProduct);
  app.put("/api/admin/products/:id", requireAuth, updateProduct);
  app.delete("/api/admin/products/:id", requireAuth, deleteProduct);
}
