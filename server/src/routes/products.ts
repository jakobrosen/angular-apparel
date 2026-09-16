import {
  sequelize,
  Product,
  Category,
  Brand,
  ProductImage,
} from "../models/index.js";
import { Request, Response, Router } from "express";
import {
  productCreateSchema,
  productQuerySchema,
  productUpdateSchema,
} from "../types/schemas.js";
import { validate } from "../utilities/validation.js";
import { parseFilters, parseProduct, parseId } from "../utilities/parsing.js";
import { HttpError } from "../middleware/errorHandler.js";
import { requireAuth } from "../middleware/auth.js";

const includeAll = [
  { model: Category, as: "category", attributes: ["name"] },
  { model: Brand, as: "brand", attributes: ["name"] },
  { model: ProductImage, as: "images", attributes: ["url"], separate: true },
];

async function getProducts(req: Request, res: Response): Promise<void> {
  const query = validate(productQuerySchema, req.query);
  const filters = parseFilters(query);

  const { page, limit } = query;
  const offset = (page - 1) * limit;

  const { rows, count } = await Product.findAndCountAll({
    where: filters,
    include: includeAll,
    limit,
    offset,
    distinct: true,
  });

  const parsedProducts = rows.map(parseProduct);

  res.json({
    pagination: {
      page,
      limit,
      total: count,
      totalPages: Math.ceil(count / limit),
    },
    data: parsedProducts,
  });
}

async function getProductById(req: Request, res: Response): Promise<void> {
  const id = parseId(req);

  const product = await Product.findByPk(id, { include: includeAll });

  if (!product) {
    throw new HttpError(404, `Product with ID ${id} not found`);
  }

  const parsedProduct = parseProduct(product);
  res.json(parsedProduct);
}

async function createProduct(req: Request, res: Response): Promise<void> {
  const { images, ...productData } = validate(productCreateSchema, req.body);

  const product = await sequelize.transaction(async (transaction) => {
    const created = await Product.create(productData, { transaction });

    await ProductImage.bulkCreate(
      images.map((url) => ({ url, sku: created.sku })),
      { transaction },
    );

    return created;
  });

  const createdProduct = await Product.findByPk(product.id, {
    include: includeAll,
  });

  res.status(201).json(parseProduct(createdProduct!));
}

async function updateProduct(req: Request, res: Response): Promise<void> {
  const id = parseId(req);
  const { images, ...productData } = validate(productUpdateSchema, req.body);

  const product = await Product.findByPk(id);
  if (!product) {
    throw new HttpError(404, `Product with ID ${id} not found`);
  }

  await sequelize.transaction(async (transaction) => {
    await product.update(productData, { transaction });

    if (images) {
      await ProductImage.destroy({ where: { sku: product.sku }, transaction });
      await ProductImage.bulkCreate(
        images.map((url) => ({ url, sku: product.sku })),
        { transaction },
      );
    }
  });

  const updatedProduct = await Product.findByPk(id, { include: includeAll });
  res.json(parseProduct(updatedProduct!));
}

async function deleteProduct(req: Request, res: Response): Promise<void> {
  const id = parseId(req);

  const deleted = await Product.destroy({ where: { id } });
  if (!deleted) {
    throw new HttpError(404, `Product with ID ${id} not found`);
  }

  res.json({ message: "Product deleted" });
}

export function registerProductRoutes(app: Router) {
  app.get("/api/products", getProducts);
  app.get("/api/products/:id", getProductById);

  app.post("/api/admin/products", requireAuth, createProduct);
  app.put("/api/admin/products/:id", requireAuth, updateProduct);
  app.delete("/api/admin/products/:id", requireAuth, deleteProduct);
}
