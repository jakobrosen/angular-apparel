import { z } from "zod";

// Zod-enum som används för validering av "gender".
// "infer" returnerar en typ som innehåller värdet
// av zod-enumen.
export const genderEnum = z.enum(["men", "women"]);
export type Gender = z.infer<typeof genderEnum>;

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
  discount: z.coerce.boolean().optional(),
});

export const brandOrCategorySchema = z.object({ name: z.string().min(1) });

export const brandOrCategorySchemaWithId = z.object({
  id: z.coerce.number().nonnegative(),
  name: z.string().min(1),
});

export const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});
