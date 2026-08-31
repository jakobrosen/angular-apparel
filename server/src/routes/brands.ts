import { Router, Request, Response } from "express";
import { brandRepo } from "../repositories/brandRepo.js";

export function registerBrandsRoutes(app: Router) {
  // GET all brands
  app.get("/api/brands", (_req: Request, res: Response) => {
    const brands = brandRepo.getAll();
    res.json(brands);
  });

  // GET brand by ID
  app.get("/api/brands/:id", (req: Request, res: Response) => {
    const brand = brandRepo.getById(Number(req.params.id));
    if (!brand) return res.status(404).json({ error: "Brand not found" });
    res.json(brand);
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
