import { z } from "zod";

// Enum that contains all values allowed in a products "gender" value.
export const genderEnum = z.enum(["Men's", "Women's", "Unisex"]);
export type Gender = z.infer<typeof genderEnum>;

// Login schema.
export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

// Base product schema. Used as a base to create
// productCreateSchema and productUpdateSchema.
const baseProductSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  gender: genderEnum,
  price: z.number().min(0),
  prevPrice: z.number().min(0).nullish(),
  categoryId: z.number().int().positive().nullish(),
  brandId: z.number().int().positive().nullish(),
  images: z.array(z.url()),
});

// Schema used when a product is created.
export const productCreateSchema = baseProductSchema.extend({
  gender: genderEnum.default("Unisex"),
  images: z.array(z.url()).default([]),
});
export type ProductCreateInput = z.infer<typeof productCreateSchema>;

// Schema used when a product is updated.
export const productUpdateSchema = baseProductSchema.partial();
export type ProductUpdateInput = z.infer<typeof productUpdateSchema>;

// Schema used when a brand is created.
export const brandCreateSchema = z.object({ name: z.string().min(1) });

// Schema used when a brand is updated.
export const brandUpdateSchema = z.object({
  name: z.string().min(1).optional(),
});

// Schema used when a category is created.
export const categoryCreateSchema = z.object({ name: z.string().min(1) });

// Schema used when a category is updated.
export const categoryUpdateSchema = z.object({
  name: z.string().min(1).optional(),
});

// Pagination schema used for all GET endpoints
// except for the GET by query endpoint
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(48),
});

// Pagination schema used for the GET by query endpoint
export const searchQuerySchema = paginationSchema.extend({
  q: z.string().min(1),
});

// Optional product-browsing filters shared by every "browse" route (all
// products, by brand, by category, by gender) so they can be combined,
// e.g. men's shoes under $100. Each route merges this with
// paginationSchema, omitting whichever one dimension its own URL already
// fixes (e.g. /api/brands/:name/products omits `brandId`). Brand/category
// are ids here, not names — the frontend already has both from
// GET /api/brands / GET /api/categories, and it keeps this schema (and the
// where-building code that reads it) a plain synchronous lookup with no DB
// round-trip, unlike the `:name` path segments, which do resolve a name.
export const productFilterSchema = z.object({
  brandId: z.coerce.number().int().positive().optional(),
  categoryId: z.coerce.number().int().positive().optional(),
  gender: genderEnum.optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
});
export type ProductFilters = z.infer<typeof productFilterSchema>;
