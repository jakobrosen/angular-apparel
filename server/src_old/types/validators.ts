import { z } from "zod";

export const genderEnum = z.enum(["Men's", "Women's", "Unisex"]);
export type Gender = z.infer<typeof genderEnum>;

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

// Base field shapes with no defaults — used to build both the create schema
// (which adds defaults) and the update schema (.partial() of this). Building
// update as create.partial() would be wrong: zod's .default() intercepts
// `undefined`, so an omitted field on a partial update would silently reset
// to its default instead of staying untouched.
const productFields = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  gender: genderEnum,
  price: z.number().min(0),
  prevPrice: z.number().min(0).nullish(),
  categoryId: z.number().int().positive().nullish(),
  brandId: z.number().int().positive().nullish(),
  images: z.array(z.string().url()),
});

export const productCreateSchema = productFields.extend({
  gender: genderEnum.default("Unisex"),
  images: z.array(z.string().url()).default([]),
});

export const productUpdateSchema = productFields.partial();

export type ProductCreateInput = z.infer<typeof productCreateSchema>;
export type ProductUpdateInput = z.infer<typeof productUpdateSchema>;

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
