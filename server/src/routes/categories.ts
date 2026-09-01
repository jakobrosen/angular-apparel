import { Router, Request, Response } from "express";
import { categoryRepo } from "../repositories/categoryRepo.js";
import { productRepo } from "../repositories/productRepo.js";
import { requireAuth } from "../middleware/auth.js";
import { categoryCreateSchema, categoryUpdateSchema, querySchema } from "../types/validators.js";

export function registerCategoriesRoutes(app: Router) {
  // GET all categories
  app.get("/api/categories", (_req: Request, res: Response) => {
    const categories = categoryRepo.getAll();
    res.json(categories);
  });

  // GET products by category name — ?q=keyword&brand=Adidas&minPrice=100&maxPrice=500&gender=Men's
  //   + pagination: &page=1&limit=48
  app.get("/api/categories/:name", (req: Request, res: Response) => {
    const category = categoryRepo.getByName(req.params.name as string);
    if (!category) return res.status(404).json({ error: "Category not found" });

    const parsed = querySchema.safeParse({
      q: req.query.q,
      category: req.params.name,
      brand: req.query.brand,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      gender: req.query.gender,
      page: req.query.page,
      limit: req.query.limit,
    });
    if (!parsed.success)
      return res.status(400).json({ error: "Invalid query params" });
    const result = productRepo.search(parsed.data);
    res.json(result);
  });

  // --- Admin routes ---

  // POST create a category
  app.post("/api/admin/categories", requireAuth, (req: Request, res: Response) => {
    const parsed = categoryCreateSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    const category = categoryRepo.create(parsed.data);
    res.status(201).json(category);
  });

  // PUT update a category
  app.put("/api/admin/categories/:id", requireAuth, (req: Request, res: Response) => {
    const parsed = categoryUpdateSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    const category = categoryRepo.update(Number(req.params.id), parsed.data);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  });

  // DELETE a category
  app.delete("/api/admin/categories/:id", requireAuth, (req: Request, res: Response) => {
    categoryRepo.delete(Number(req.params.id));
    res.json({ message: "Category deleted" });
  });
}
