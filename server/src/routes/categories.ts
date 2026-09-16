import { Category } from "../models/index.js";
import type { Request, Response, Router } from "express";
import { validate } from "../utilities/validation.js";
import {
  brandOrCategorySchema,
  brandOrCategorySchemaWithId,
} from "../types/schemas.js";
import { HttpError } from "../middleware/errorHandler.js";
import { requireAuth } from "../middleware/auth.js";

async function getAllCategories(_req: Request, res: Response): Promise<void> {
  const categories = await Category.findAll();
  res.json(categories);
}

async function createCategory(req: Request, res: Response): Promise<void> {
  const data = validate(brandOrCategorySchema, req.body);

  res.status(201).json(await Category.create(data));
}

async function updateCategory(req: Request, res: Response): Promise<void> {
  const data = validate(brandOrCategorySchemaWithId, req.body);
  const category = await Category.findByPk(data.id);
  if (!category) {
    throw new HttpError(404, `Category with ID ${data.id} not found`);
  }

  await category.update(data);
  res.json(category);
}

async function deleteCategory(req: Request, res: Response): Promise<void> {
  const id = Number.parseInt(req.body.id);

  const deleted = await Category.destroy({ where: { id } });
  if (!deleted) {
    throw new HttpError(404, `Category with ID ${id} not found`);
  }

  res.json({ message: "Category deleted" });
}

export function registerCategoryRoutes(app: Router) {
  app.get("/api/categories", getAllCategories);

  app.post("/api/admin/categories", requireAuth, createCategory);
  app.put("/api/admin/categories", requireAuth, updateCategory);
  app.delete("/api/admin/categories", requireAuth, deleteCategory);
}
