import { Router, Request, Response } from "express";
import { categoryRepo } from "../repositories/categoryRepo.js";
import { productRepo } from "../repositories/productRepo.js";

export function registerCategoriesRoutes(app: Router) {
  // GET all categories
  app.get("/api/categories", (_req: Request, res: Response) => {
    const categories = categoryRepo.getAll();
    res.json(categories);
  });

  // GET products by category name — ?q=keyword&brand=Adidas&minPrice=100&maxPrice=500&gender=Men's
  app.get("/api/categories/:name", (req: Request, res: Response) => {
    const category = categoryRepo.getByName(req.params.name as string);
    if (!category) return res.status(404).json({ error: "Category not found" });

    const products = productRepo.search({
      q: req.query.q as string | undefined,
      category: req.params.name as string,
      brand: req.query.brand as string | undefined,
      minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
      maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
      gender: req.query.gender as string | undefined,
    });
    res.json(products);
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
