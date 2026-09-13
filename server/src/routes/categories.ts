import { Category } from "../models/index.js";
import type { Request, Response, Router } from "express";

async function getAllCategories(_req: Request, res: Response): Promise<void> {
  const categories = await Category.findAll();
  res.json(categories);
}

export function registerCategoryRoutes(app: Router) {
  app.get("/api/categories", getAllCategories);
}
