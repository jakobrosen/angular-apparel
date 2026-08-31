import { Router, Request, Response } from "express";
import { categoryRepo } from "../repositories/categoryRepo.js";

export function registerCategoriesRoutes(app: Router) {
  // GET all categories
  app.get("/api/categories", (_req: Request, res: Response) => {
    const categories = categoryRepo.getAll();
    res.json(categories);
  });

  // GET category by ID
  app.get("/api/categories/:id", (req: Request, res: Response) => {
    const category = categoryRepo.getById(Number(req.params.id));
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  });

  // POST create a category
  app.post("/api/categories", (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "name is required" });

    const category = categoryRepo.create({ name });
    res.status(201).json(category);
  });

  // PUT update a category
  app.put("/api/categories/:id", (req: Request, res: Response) => {
    const category = categoryRepo.update(Number(req.params.id), req.body);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  });

  // DELETE a category
  app.delete("/api/categories/:id", (req: Request, res: Response) => {
    categoryRepo.delete(Number(req.params.id));
    res.json({ message: "Category deleted" });
  });
}
