import { Router, Request, Response } from "express";
import { brandRepo } from "../repositories/brandRepo.js";
import { productRepo } from "../repositories/productRepo.js";
import { requireAuth } from "../middleware/auth.js";
import { brandCreateSchema, brandUpdateSchema, querySchema } from "../types/validators.js";

export function registerBrandsRoutes(app: Router) {
  // GET all brands
  app.get("/api/brands", (_req: Request, res: Response) => {
    const brands = brandRepo.getAll();
    res.json(brands);
  });

  // GET products by brand name — ?q=keyword&category=Shirts&minPrice=100&maxPrice=500&gender=Men's
  //   + pagination: &page=1&limit=48
  app.get("/api/brands/:name", (req: Request, res: Response) => {
    const brand = brandRepo.getByName(req.params.name as string);
    if (!brand) return res.status(404).json({ error: "Brand not found" });

    const parsed = querySchema.safeParse({
      q: req.query.q,
      brand: req.params.name,
      category: req.query.category,
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

  // POST create a brand
  app.post("/api/admin/brands", requireAuth, (req: Request, res: Response) => {
    const parsed = brandCreateSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    const brand = brandRepo.create(parsed.data);
    res.status(201).json(brand);
  });

  // PUT update a brand
  app.put("/api/admin/brands/:id", requireAuth, (req: Request, res: Response) => {
    const parsed = brandUpdateSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    const brand = brandRepo.update(Number(req.params.id), parsed.data);
    if (!brand) return res.status(404).json({ error: "Brand not found" });
    res.json(brand);
  });

  // DELETE a brand
  app.delete("/api/admin/brands/:id", requireAuth, (req: Request, res: Response) => {
    brandRepo.delete(Number(req.params.id));
    res.json({ message: "Brand deleted" });
  });
}
