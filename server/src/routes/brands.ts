import type { Request, Response, Router } from "express";
import { Brand } from "../models/index.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../utilities/validate.js";
import { parseId } from "../utilities/parseId.js";
import { brandCreateSchema, brandUpdateSchema } from "../types/validators.js";

async function listBrands(_req: Request, res: Response): Promise<void> {
  res.json(await Brand.findAll({ order: [["id", "ASC"]] }));
}

async function createBrand(req: Request, res: Response): Promise<void> {
  const data = validate(brandCreateSchema, req.body, res);
  if (!data) return;

  res.status(201).json(await Brand.create(data));
}

async function updateBrand(req: Request, res: Response): Promise<void> {
  const id = parseId(req, res);
  if (id === null) return;

  const data = validate(brandUpdateSchema, req.body, res);
  if (!data) return;

  const brand = await Brand.findByPk(id);
  if (!brand) {
    res.status(404).json({ error: "Brand not found" });
    return;
  }

  await brand.update(data);
  res.json(brand);
}

async function deleteBrand(req: Request, res: Response): Promise<void> {
  const id = parseId(req, res);
  if (id === null) return;

  const deleted = await Brand.destroy({ where: { id } });
  if (!deleted) {
    res.status(404).json({ error: "Brand not found" });
    return;
  }
  res.json({ message: "Brand deleted" });
}

export function registerBrandsRoutes(app: Router) {
  app.get("/api/brands", listBrands);

  app.post("/api/admin/brands", requireAuth, createBrand);
  app.put("/api/admin/brands/:id", requireAuth, updateBrand);
  app.delete("/api/admin/brands/:id", requireAuth, deleteBrand);
}
