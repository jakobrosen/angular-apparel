import type { Request, Response, Router } from "express";
import { Brand } from "../models/index.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../utilities/validate.js";
import { parseId } from "../utilities/parseId.js";
import { findOrFail } from "../utilities/findOrFail.js";
import { HttpError } from "../utilities/httpError.js";
import { brandCreateSchema, brandUpdateSchema } from "../types/validators.js";

async function listBrands(_req: Request, res: Response): Promise<void> {
  res.json(await Brand.findAll({ order: [["id", "ASC"]] }));
}

async function createBrand(req: Request, res: Response): Promise<void> {
  const data = validate(brandCreateSchema, req.body);

  res.status(201).json(await Brand.create(data));
}

async function updateBrand(req: Request, res: Response): Promise<void> {
  const id = parseId(req);
  const data = validate(brandUpdateSchema, req.body);
  const brand = await findOrFail(Brand, id, "Brand");

  await brand.update(data);
  res.json(brand);
}

async function deleteBrand(req: Request, res: Response): Promise<void> {
  const id = parseId(req);

  // destroy returns the number of rows removed, so 0 means there was no such
  // brand - no need to fetch it first just to find that out.
  const deleted = await Brand.destroy({ where: { id } });
  if (!deleted) throw new HttpError(404, "Brand not found");

  res.json({ message: "Brand deleted" });
}

export function registerBrandsRoutes(app: Router) {
  app.get("/api/brands", listBrands);

  app.post("/api/admin/brands", requireAuth, createBrand);
  app.put("/api/admin/brands/:id", requireAuth, updateBrand);
  app.delete("/api/admin/brands/:id", requireAuth, deleteBrand);
}
