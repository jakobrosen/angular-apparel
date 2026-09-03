import { Router, Request, Response } from "express";
import { Brand } from "../models/index.js";
import * as productService from "../services/productService.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../utilities/validate.js";
import { findByNameCI } from "../utilities/db.js";
import {
  brandCreateSchema,
  brandUpdateSchema,
  querySchema,
} from "../types/validators.js";

export function registerBrandsRoutes(app: Router) {
  // GET all brands
  app.get("/api/brands", async (_req: Request, res: Response) => {
    const brands = await Brand.findAll({ order: [["id", "ASC"]] });
    res.json(brands);
  });

  // GET products by brand name — same filters/pagination as /api/products
  app.get("/api/brands/:name", async (req: Request, res: Response) => {
    const brand = await findByNameCI(Brand, req.params.name as string);
    if (!brand) return res.status(404).json({ error: "Brand not found" });

    const query = validate(
      querySchema,
      { ...req.query, brand: brand.name },
      res,
    );
    if (!query) return;
    res.json(await productService.searchProducts(query));
  });

  // POST create a brand
  app.post(
    "/api/admin/brands",
    requireAuth,
    async (req: Request, res: Response) => {
      const data = validate(brandCreateSchema, req.body, res);
      if (!data) return;
      const brand = await Brand.create(data);
      res.status(201).json(brand);
    },
  );

  // PUT update a brand
  app.put(
    "/api/admin/brands/:id",
    requireAuth,
    async (req: Request, res: Response) => {
      const data = validate(brandUpdateSchema, req.body, res);
      if (!data) return;
      const brand = await Brand.findByPk(Number(req.params.id));
      if (!brand) return res.status(404).json({ error: "Brand not found" });
      await brand.update(data);
      res.json(brand);
    },
  );

  // DELETE a brand
  app.delete(
    "/api/admin/brands/:id",
    requireAuth,
    async (req: Request, res: Response) => {
      const deleted = await Brand.destroy({
        where: { id: Number(req.params.id) },
      });
      if (!deleted) return res.status(404).json({ error: "Brand not found" });
      res.json({ message: "Brand deleted" });
    },
  );
}
