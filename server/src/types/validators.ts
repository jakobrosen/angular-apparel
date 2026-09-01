import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const productCreateSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  gender: z.enum(["Men's", "Women's", "Unisex"]).default("Unisex"),
  price: z.number().min(0),
  prev_price: z.number().min(0).nullish(),
  category_name: z.string().min(1),
  brand_name: z.string().min(1),
  images: z.array(z.string().url()).default([]),
});

export const productUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  gender: z.enum(["Men's", "Women's", "Unisex"]).optional(),
  price: z.number().min(0).optional(),
  prev_price: z.number().min(0).nullish().optional(),
  category_name: z.string().min(1).optional(),
  brand_name: z.string().min(1).optional(),
  images: z.array(z.string().url()).optional(),
});

export const brandCreateSchema = z.object({
  name: z.string().min(1),
});

export const brandUpdateSchema = z.object({
  name: z.string().min(1).optional(),
});

export const categoryCreateSchema = z.object({
  name: z.string().min(1),
});

export const categoryUpdateSchema = z.object({
  name: z.string().min(1).optional(),
});

export const querySchema = z.object({
  q: z.string().optional(),
  brand: z.string().optional(),
  category: z.string().optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  gender: z.string().optional(),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(48),
});
