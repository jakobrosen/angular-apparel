import type { Request, Response, Router } from "express";
import { Category } from "../models/index.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../utilities/validate.js";
import { parseId } from "../utilities/parseId.js";
import { findOrFail } from "../utilities/findOrFail.js";
import { HttpError } from "../utilities/httpError.js";
import {
  categoryCreateSchema,
  categoryUpdateSchema,
} from "../types/validators.js";

async function listCategories(_req: Request, res: Response): Promise<void> {
  res.json(await Category.findAll({ order: [["id", "ASC"]] }));
}

async function createCategory(req: Request, res: Response): Promise<void> {
  const data = validate(categoryCreateSchema, req.body);

  res.status(201).json(await Category.create(data));
}

async function updateCategory(req: Request, res: Response): Promise<void> {
  const id = parseId(req);
  const data = validate(categoryUpdateSchema, req.body);
  const category = await findOrFail(Category, id, "Category");

  await category.update(data);
  res.json(category);
}

async function deleteCategory(req: Request, res: Response): Promise<void> {
  const id = parseId(req);

  // destroy returns the number of rows removed, so 0 means there was no such
  // category - no need to fetch it first just to find that out.
  const deleted = await Category.destroy({ where: { id } });
  if (!deleted) throw new HttpError(404, "Category not found");

  res.json({ message: "Category deleted" });
}

export function registerCategoriesRoutes(app: Router) {
  app.get("/api/categories", listCategories);

  app.post("/api/admin/categories", requireAuth, createCategory);
  app.put("/api/admin/categories/:id", requireAuth, updateCategory);
  app.delete("/api/admin/categories/:id", requireAuth, deleteCategory);
}
