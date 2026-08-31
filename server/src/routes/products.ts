import { Router, Request, Response } from "express";
import { productRepo } from "../repositories/productRepo.js";
import { imageRepo } from "../repositories/imageRepo.js";

export function registerProductsRoutes(app: Router) {
  // GET all products
  app.get("/api/products", (_req: Request, res: Response) => {
    const products = productRepo.getAll();
    res.json(products);
  });

  // GET product by ID
  app.get("/api/products/:id", (req: Request, res: Response) => {
    const product = productRepo.getById(Number(req.params.id));
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  });

  // GET products by name (search) — ?q=keyword
  app.get("/api/products/search", (req: Request, res: Response) => {
    const query = req.query.q as string;
    if (!query) {
      return res.status(400).json({ error: "Query parameter 'q' is required" });
    }
    const products = productRepo.searchByTitle(query);
    res.json(products);
  });

  // GET products by brand name — ?brand=BrandName
  app.get("/api/products/brand", (req: Request, res: Response) => {
    const brand = req.query.brand as string;
    if (!brand) {
      return res.status(400).json({ error: "Query parameter 'brand' is required" });
    }
    const products = productRepo.getByBrand(brand);
    res.json(products);
  });

  // GET products by category name — ?category=CategoryName
  app.get("/api/products/category", (req: Request, res: Response) => {
    const category = req.query.category as string;
    if (!category) {
      return res.status(400).json({ error: "Query parameter 'category' is required" });
    }
    const products = productRepo.getByCategory(category);
    res.json(products);
  });

  // POST create a new product
  app.post("/api/products", (req: Request, res: Response) => {
    const product = productRepo.create(req.body);
    res.status(201).json(product);
  });

  // PUT update a product
  app.put("/api/products/:id", (req: Request, res: Response) => {
    const product = productRepo.update(Number(req.params.id), req.body);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  });

  // DELETE a product
  app.delete("/api/products/:id", (req: Request, res: Response) => {
    productRepo.delete(Number(req.params.id));
    res.json({ message: "Product deleted" });
  });

  // POST add an image to a product
  app.post("/api/products/:id/images", (req: Request, res: Response) => {
    const productId = Number(req.params.id);
    const product = productRepo.getById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const { url, is_main, sort_order } = req.body;
    if (!url) return res.status(400).json({ error: "url is required" });

    const image = imageRepo.create(
      productId,
      url,
      is_main ?? false,
      sort_order ?? 0,
    );
    res.status(201).json(image);
  });

  // GET images for a product
  app.get("/api/products/:id/images", (req: Request, res: Response) => {
    const productId = Number(req.params.id);
    const product = productRepo.getById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const images = imageRepo.getByProduct(productId);
    res.json(images);
  });

  // DELETE all images for a product
  app.delete("/api/products/:id/images", (req: Request, res: Response) => {
    const productId = Number(req.params.id);
    const product = productRepo.getById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    imageRepo.deleteByProduct(productId);
    res.json({ message: "Images deleted" });
  });
}
