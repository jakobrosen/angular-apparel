import type { Response } from "express";
import type { ZodType } from "zod";

/**
 * Parses `input` against `schema`. On failure, sends a 400 with the
 * field-level errors and returns undefined — callers should `return` when
 * they get undefined back, since the response has already been sent.
 */
export function validate<T>(
  schema: ZodType<T>,
  input: unknown,
  res: Response,
): T | undefined {
  const parsed = schema.safeParse(input);
  if (parsed.success) return parsed.data;
  res.status(400).json({ error: parsed.error.flatten().fieldErrors });
  return undefined;
}
