import { z } from "zod";

// Zod-enum som används för validering av "gender".
// "infer" returnerar en typ som innehåller värdet
// av zod-enumen.
export const genderEnum = z.enum(["men", "women"]);
export type Gender = z.infer<typeof genderEnum>;

export const productQuerySchema = z.object({
  q: z.string().optional(),
  gender: z
    .string()
    .transform((str) => str.split(","))
    .optional(),
  category: z
    .string()
    .transform((str) => str.split(","))
    .optional(),
  brand: z
    .string()
    .transform((str) => str.split(","))
    .optional(),
  minPrice: z.coerce.number().nonnegative().optional(),
  maxPrice: z.coerce.number().nonnegative().optional(),
  discount: z.coerce.boolean().optional(),
});
