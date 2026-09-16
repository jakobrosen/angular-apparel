import { z } from "zod";

// Zod-enum som används för validering av "gender".
// "infer" returnerar en typ som innehåller värdet
// av zod-enumen.
export const genderEnum = z.enum(["men", "women"]);
export type Gender = z.infer<typeof genderEnum>;

// Regex som matchar ett giltigt SKU.
const SKU_REGEX = /^[A-Z]{3}\d{3}$/;

/**
 * Används vid parsing av query params med multi select filters.
 */
function parseMultiSelectParams() {
  return z
    .string()
    .transform((str) => str.split(","))
    .optional();
}

export const productQuerySchema = z.object({
  q: z.string().optional(),
  gender: parseMultiSelectParams(),
  category: parseMultiSelectParams(),
  brand: parseMultiSelectParams(),
  minPrice: z.coerce.number().nonnegative().optional(),
  maxPrice: z.coerce.number().nonnegative().optional(),
  discount: z.stringbool().optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(96).default(48),
});

export const productCreateSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  gender: genderEnum,
  price: z.number().nonnegative(),
  prevPrice: z.number().nonnegative().nullable().optional(),
  sku: z.string().toUpperCase().regex(SKU_REGEX),
  categoryId: z.number().int().min(1),
  brandId: z.number().int().min(1),
  images: z.array(z.url()).min(1),
});

export const productUpdateSchema = productCreateSchema.partial();

export const brandOrCategorySchema = z.object({ name: z.string().min(1) });

export const brandOrCategorySchemaWithId = z.object({
  id: z.number().int().min(1),
  name: z.string().min(1),
});

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});
