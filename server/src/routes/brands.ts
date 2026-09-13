import { Brand } from "../models/index.js";
import type { Request, Response, Router } from "express";

async function getAllBrands(_req: Request, res: Response): Promise<void> {
  const brands = await Brand.findAll();
  res.json(brands);
}

export function registerBrandRoutes(app: Router) {
  app.get("/api/brands", getAllBrands);
}
