import { z } from "zod";

// Zod-enum som används för validering av "gender".
// "infer" returnerar en typ som innehåller värdet
// av zod-enumen.
export const genderEnum = z.enum(["men", "women"]);
export type Gender = z.infer<typeof genderEnum>;

export const categoryTypeEnum = z.enum(["accessory", "clothing"]);
export type CategoryType = z.infer<typeof categoryTypeEnum>;

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

export const brandSchema = z.object({ name: z.string().min(1) });

export const brandSchemaWithId = z.object({
  id: z.number().int().min(1),
  name: z.string().min(1),
});

// Kategorier har till skillnad från märken även en "type", så
// de kan inte längre dela schema med brands.
export const categorySchema = z.object({
  name: z.string().min(1),
  type: categoryTypeEnum,
});

export const categorySchemaWithId = z.object({
  id: z.number().int().min(1),
  name: z.string().min(1),
  type: categoryTypeEnum,
});

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});
