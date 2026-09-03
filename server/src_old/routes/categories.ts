import { Router, Request, Response } from "express";
import { Category } from "../models/index.js";
import * as productService from "../services/productService.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../utilities/validate.js";
import { findByNameCI } from "../utilities/db.js";
import {
  categoryCreateSchema,
  categoryUpdateSchema,
  querySchema,
} from "../types/validators.js";

export function registerCategoriesRoutes(app: Router) {
  // GET all categories
  app.get("/api/categories", async (_req: Request, res: Response) => {
    const categories = await Category.findAll({ order: [["id", "ASC"]] });
    res.json(categories);
  });

  // GET products by category name — same filters/pagination as /api/products
  app.get("/api/categories/:name", async (req: Request, res: Response) => {
    const category = await findByNameCI(Category, req.params.name as string);
    if (!category)
      return res.status(404).json({ error: "Category not found" });

    const query = validate(
      querySchema,
      { ...req.query, category: category.name },
      res,
    );
    if (!query) return;
    res.json(await productService.searchProducts(query));
  });

  // --- Admin routes ---

  // POST create a category
  app.post(
    "/api/admin/categories",
    requireAuth,
    async (req: Request, res: Response) => {
      const data = validate(categoryCreateSchema, req.body, res);
      if (!data) return;
      const category = await Category.create(data);
      res.status(201).json(category);
    },
  );

  // PUT update a category
  app.put(
    "/api/admin/categories/:id",
    requireAuth,
    async (req: Request, res: Response) => {
      const data = validate(categoryUpdateSchema, req.body, res);
      if (!data) return;
      const category = await Category.findByPk(Number(req.params.id));
      if (!category)
        return res.status(404).json({ error: "Category not found" });
      await category.update(data);
      res.json(category);
    },
  );

  // DELETE a category
  app.delete(
    "/api/admin/categories/:id",
    requireAuth,
    async (req: Request, res: Response) => {
      const deleted = await Category.destroy({
        where: { id: Number(req.params.id) },
      });
      if (!deleted)
        return res.status(404).json({ error: "Category not found" });
      res.json({ message: "Category deleted" });
    },
  );
}
