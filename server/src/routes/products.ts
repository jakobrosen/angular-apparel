import type { Request, Response, Router } from "express";
import { Op } from "sequelize";
import { Brand, Category, Product, ProductImage } from "../models/index.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../utilities/validate.js";
import { paginate } from "../utilities/pagination.js";
import { buildProductWhere } from "../services/productFilters.js";
import { parseId } from "../utilities/parseId.js";
import {
  productQuerySchema,
  productCreateSchema,
  productUpdateSchema,
  type ProductQuery,
} from "../types/validators.js";

// Every product response includes its category, brand, and images.
const includeAll = [
  { model: Category, as: "category" },
  { model: Brand, as: "brand" },
  { model: ProductImage, as: "images" },
];

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
  const query = validate(productQuerySchema, req.query, res);
  if (!query) return;

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
  const id = parseId(req, res);
  if (id === null) return;

  const product = await Product.findByPk(id, { include: includeAll });
  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }
  res.json(product);
}

async function createProduct(req: Request, res: Response): Promise<void> {
  const data = validate(productCreateSchema, req.body, res);
  if (!data) return;

  const product = await Product.create({
    title: data.title,
    description: data.description,
    gender: data.gender,
    price: data.price,
    prevPrice: data.prevPrice ?? null,
    categoryId: data.categoryId ?? null,
    brandId: data.brandId ?? null,
  });

  if (data.images.length) {
    await ProductImage.bulkCreate(
      data.images.map((url) => ({ url, productId: product.id })),
    );
  }

  res.status(201).json(await Product.findByPk(product.id, { include: includeAll }));
}

async function updateProduct(req: Request, res: Response): Promise<void> {
  const id = parseId(req, res);
  if (id === null) return;

  const data = validate(productUpdateSchema, req.body, res);
  if (!data) return;

  const product = await Product.findByPk(id);
  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }

  const { images, ...fields } = data;
  await product.update(fields);

  // Images have no identity beyond "belongs to this product + a URL", so a
  // full replace is simpler and safer than diffing old vs. new URLs.
  if (images !== undefined) {
    await ProductImage.destroy({ where: { productId: id } });
    if (images.length) {
      await ProductImage.bulkCreate(images.map((url) => ({ url, productId: id })));
    }
  }

  res.json(await Product.findByPk(id, { include: includeAll }));
}

async function deleteProduct(req: Request, res: Response): Promise<void> {
  const id = parseId(req, res);
  if (id === null) return;

  const deleted = await Product.destroy({ where: { id } });
  if (!deleted) {
    res.status(404).json({ error: "Product not found" });
    return;
  }
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
