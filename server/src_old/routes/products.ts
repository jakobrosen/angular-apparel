import { Router, Request, Response } from "express";
import * as productService from "../services/productService.js";
import { requireAuth } from "../middleware/auth.js";
import { validate } from "../utilities/validate.js";
import {
  productCreateSchema,
  productUpdateSchema,
  querySchema,
} from "../types/validators.js";

// GET products — optional filters: ?q=keyword&brand=Adidas&category=Shirts
//   &minPrice=100&maxPrice=500&gender=Men's, plus pagination: &page=1&limit=48
// Registered on both /api/products and /api/products/search (identical
// behavior — the latter just reads better for an explicit search request).
async function listProducts(req: Request, res: Response) {
  const query = validate(querySchema, req.query, res);
  if (!query) return;
  res.json(await productService.searchProducts(query));
}

export function registerProductsRoutes(app: Router) {
  app.get("/api/products", listProducts);
  app.get("/api/products/search", listProducts);

  // GET product by ID
  app.get("/api/products/:id", async (req: Request, res: Response) => {
    const product = await productService.getProductById(
      Number(req.params.id),
    );
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  });

  // --- Admin routes ---

  // POST create a product
  app.post(
    "/api/admin/products",
    requireAuth,
    async (req: Request, res: Response) => {
      const data = validate(productCreateSchema, req.body, res);
      if (!data) return;
      const product = await productService.createProduct(data);
      res.status(201).json(product);
    },
  );

  // PUT update a product
  app.put(
    "/api/admin/products/:id",
    requireAuth,
    async (req: Request, res: Response) => {
      const data = validate(productUpdateSchema, req.body, res);
      if (!data) return;
      const product = await productService.updateProduct(
        Number(req.params.id),
        data,
      );
      if (!product)
        return res.status(404).json({ error: "Product not found" });
      res.json(product);
    },
  );

  // DELETE a product
  app.delete(
    "/api/admin/products/:id",
    requireAuth,
    async (req: Request, res: Response) => {
      const deleted = await productService.deleteProduct(
        Number(req.params.id),
      );
      if (!deleted)
        return res.status(404).json({ error: "Product not found" });
      res.json({ message: "Product deleted" });
    },
  );
}
