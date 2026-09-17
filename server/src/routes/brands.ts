import { Brand } from "../models/index.js";
import type { Request, Response, Router } from "express";
import { validate } from "../utilities/validation.js";
import { brandSchema, brandSchemaWithId } from "../types/schemas.js";
import { HttpError } from "../middleware/errorHandler.js";
import { requireAuth } from "../middleware/auth.js";

async function getAllBrands(_req: Request, res: Response): Promise<void> {
  const brands = await Brand.findAll();
  res.json(brands);
}

async function createBrand(req: Request, res: Response): Promise<void> {
  const data = validate(brandSchema, req.body);

  res.status(201).json(await Brand.create(data));
}

async function updateBrand(req: Request, res: Response): Promise<void> {
  const data = validate(brandSchemaWithId, req.body);
  const brand = await Brand.findByPk(data.id);
  if (!brand) {
    throw new HttpError(404, `Brand with ID ${data.id} not found`);
  }

  await brand.update(data);
  res.json(brand);
}

async function deleteBrand(req: Request, res: Response): Promise<void> {
  const id = Number.parseInt(req.body.id);

  const deleted = await Brand.destroy({ where: { id } });
  if (!deleted) {
    throw new HttpError(404, `Brand with ID ${id} not found`);
  }

  res.json({ message: "Brand deleted" });
}

export function registerBrandRoutes(app: Router) {
  app.get("/api/brands", getAllBrands);

  app.post("/api/admin/brands", requireAuth, createBrand);
  app.put("/api/admin/brands", requireAuth, updateBrand);
  app.delete("/api/admin/brands", requireAuth, deleteBrand);
}
