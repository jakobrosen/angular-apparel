import { Router, Request, Response } from "express";
import { productRepo } from "../repositories/productRepo.js";
import { imageRepo } from "../repositories/imageRepo.js";

export function registerProductsRoutes(app: Router) {
  // GET all products
  app.get("/api/products", (_req: Request, res: Response) => {
    const products = productRepo.getAll();
    res.json(products);
  });

  // GET products by search — ?q=keyword (searches title, brand, category)
//   + optional filters: &brand=Adidas&category=Shirts&minPrice=100&maxPrice=500&gender=Men's
  app.get("/api/products/search", (req: Request, res: Response) => {
    const products = productRepo.search({
      q: req.query.q as string | undefined,
      brand: req.query.brand as string | undefined,
      category: req.query.category as string | undefined,
      minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
      maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
      gender: req.query.gender as string | undefined,
    });
    res.json(products);
  });

  // POST add an image to a product
  app.post("/api/products/:id/images", (req: Request, res: Response) => {
    const productId = Number(req.params.id);
    const product = productRepo.getById(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "url is required" });

    const image = imageRepo.create(productId, url);
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

  // GET product by ID
  app.get("/api/products/:id", (req: Request, res: Response) => {
    const product = productRepo.getById(Number(req.params.id));
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  });

  // POST create a new product
  app.post("/api/products", (req: Request, res: Response) => {
    const { title, description, gender, price, prevPrice, discount, category, brand } = req.body;
    if (!title) return res.status(400).json({ error: "title is required" });
    if (price == null) return res.status(400).json({ error: "price is required" });

    const data = {
      title,
      description: description ?? "",
      gender: gender ?? "Unisex",
      price: Number(price),
      prev_price: prevPrice ?? null,
      discount: Boolean(discount),
      category_name: category ?? "Other",
      brand_name: brand ?? "Angular Apparel",
    };
    const product = productRepo.create(data);
    res.status(201).json(product);
  });

  // PUT update a product
  app.put("/api/products/:id", (req: Request, res: Response) => {
    const { title, description, gender, price, prevPrice, discount, category, brand } = req.body;
    const updates: Partial<{
      title: string;
      description: string;
      gender: string;
      price: number;
      prev_price: number | null;
      discount: boolean;
      category_name: string;
      brand_name: string;
    }> = {};
    if (title !== undefined) updates.title = title;
    if (description !== undefined) updates.description = description;
    if (gender !== undefined) updates.gender = gender;
    if (price !== undefined) updates.price = Number(price);
    if (prevPrice !== undefined) updates.prev_price = prevPrice;
    if (discount !== undefined) updates.discount = discount;
    if (category !== undefined) updates.category_name = category;
    if (brand !== undefined) updates.brand_name = brand;

    const product = productRepo.update(Number(req.params.id), updates);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  });

  // DELETE a product
  app.delete("/api/products/:id", (req: Request, res: Response) => {
    productRepo.delete(Number(req.params.id));
    res.json({ message: "Product deleted" });
  });
}
