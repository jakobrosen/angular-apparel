import type { Request, Response, Router } from "express";
import { Category } from "../models/index.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../utilities/validate.js";
import { parseId } from "../utilities/parseId.js";
import { categoryCreateSchema, categoryUpdateSchema } from "../types/validators.js";

async function listCategories(_req: Request, res: Response): Promise<void> {
  res.json(await Category.findAll({ order: [["id", "ASC"]] }));
}

async function createCategory(req: Request, res: Response): Promise<void> {
  const data = validate(categoryCreateSchema, req.body, res);
  if (!data) return;

  res.status(201).json(await Category.create(data));
}

async function updateCategory(req: Request, res: Response): Promise<void> {
  const id = parseId(req, res);
  if (id === null) return;

  const data = validate(categoryUpdateSchema, req.body, res);
  if (!data) return;

  const category = await Category.findByPk(id);
  if (!category) {
    res.status(404).json({ error: "Category not found" });
    return;
  }

  await category.update(data);
  res.json(category);
}

async function deleteCategory(req: Request, res: Response): Promise<void> {
  const id = parseId(req, res);
  if (id === null) return;

  const deleted = await Category.destroy({ where: { id } });
  if (!deleted) {
    res.status(404).json({ error: "Category not found" });
    return;
  }
  res.json({ message: "Category deleted" });
}

export function registerCategoriesRoutes(app: Router) {
  app.get("/api/categories", listCategories);

  app.post("/api/admin/categories", requireAuth, createCategory);
  app.put("/api/admin/categories/:id", requireAuth, updateCategory);
  app.delete("/api/admin/categories/:id", requireAuth, deleteCategory);
}
