import { Router, Request, Response } from "express";
import { brandRepo } from "../repositories/brandRepo.js";
import { productRepo } from "../repositories/productRepo.js";

export function registerBrandsRoutes(app: Router) {
  // GET all brands
  app.get("/api/brands", (_req: Request, res: Response) => {
    const brands = brandRepo.getAll();
    res.json(brands);
  });

  // GET products by brand name — ?q=keyword&category=Shirts&minPrice=100&maxPrice=500&gender=Men's
  app.get("/api/brands/:name", (req: Request, res: Response) => {
    const brand = brandRepo.getByName(req.params.name as string);
    if (!brand) return res.status(404).json({ error: "Brand not found" });

    const products = productRepo.search({
      q: req.query.q as string | undefined,
      brand: req.params.name as string,
      category: req.query.category as string | undefined,
      minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
      maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
      gender: req.query.gender as string | undefined,
    });
    res.json(products);
  });

  // POST create a brand
  app.post("/api/brands", (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "name is required" });

    const brand = brandRepo.create({ name });
    res.status(201).json(brand);
  });

  // PUT update a brand
  app.put("/api/brands/:id", (req: Request, res: Response) => {
    const brand = brandRepo.update(Number(req.params.id), req.body);
    if (!brand) return res.status(404).json({ error: "Brand not found" });
    res.json(brand);
  });

  // DELETE a brand
  app.delete("/api/brands/:id", (req: Request, res: Response) => {
    brandRepo.delete(Number(req.params.id));
    res.json({ message: "Brand deleted" });
  });
}
