import { Router, Request, Response } from "express";
import { productRepo } from "../repositories/productRepo.js";
import { imageRepo } from "../repositories/imageRepo.js";
import { requireAuth } from "../middleware/auth.js";
import {
  productCreateSchema,
  productUpdateSchema,
  querySchema,
} from "../types/validators.js";

export function registerProductsRoutes(app: Router) {
  // GET all products
  app.get("/api/products", (req: Request, res: Response) => {
    const parsed = querySchema.safeParse({
      page: req.query.page,
      limit: req.query.limit,
    });
    if (!parsed.success)
      return res.status(400).json({ error: "Invalid query params" });
    const result = productRepo.getAll(parsed.data.page, parsed.data.limit);
    res.json(result);
  });

  // GET products by search — ?q=keyword (searches title, brand, category)
  //   + optional filters: &brand=Adidas&category=Shirts&minPrice=100&maxPrice=500&gender=Men's
  //   + pagination: &page=1&limit=48
  app.get("/api/products/search", (req: Request, res: Response) => {
    const parsed = querySchema.safeParse({
      q: req.query.q,
      brand: req.query.brand,
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

  // GET product by ID
  app.get("/api/products/:id", (req: Request, res: Response) => {
    const product = productRepo.getById(Number(req.params.id));
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  });

  // --- Admin routes ---

  // POST create a product
  app.post("/api/admin/products", requireAuth, (req: Request, res: Response) => {
    const parsed = productCreateSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    const data = parsed.data;
    const product = productRepo.create(data);

    for (const url of data.images) {
      imageRepo.create(product.id, url);
    }

    res.status(201).json(productRepo.getById(product.id));
  });

  // PUT update a product
  app.put("/api/admin/products/:id", requireAuth, (req: Request, res: Response) => {
    const parsed = productUpdateSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    const data = parsed.data;

    const product = productRepo.update(Number(req.params.id), data);
    if (!product) return res.status(404).json({ error: "Product not found" });

    // Reconcile images: delete removed, add new
    if (data.images !== undefined) {
      const existing = imageRepo.getByProduct(product.id);
      const newUrls = new Set(data.images);

      for (const img of existing) {
        if (!newUrls.has(img.url)) {
          imageRepo.deleteById(img.id);
        }
      }

      for (const url of data.images) {
        if (!existing.find((img) => img.url === url)) {
          imageRepo.create(product.id, url);
        }
      }
    }

    res.json(productRepo.getById(product.id));
  });

  // DELETE a product
  app.delete("/api/admin/products/:id", requireAuth, (req: Request, res: Response) => {
    productRepo.delete(Number(req.params.id));
    res.json({ message: "Product deleted" });
  });
}
