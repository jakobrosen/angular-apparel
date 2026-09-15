import { HttpError } from "../middleware/errorHandler.js";
import { z, flattenError, type ZodType } from "zod";

/**
 * Används för att validera data mot ett zod-schema.
 * Kastar ett fel om valideringen misslyckas.
 */
export function validate<T extends ZodType>(
  schema: T,
  input: unknown,
): z.infer<T> {
  const validation = schema.safeParse(input);

  if (!validation.success) {
    throw new HttpError(400, flattenError(validation.error).fieldErrors);
  }

  return validation.data;
}
