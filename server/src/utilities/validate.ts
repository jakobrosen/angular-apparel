import type { Response } from "express";
import { flattenError, type ZodType } from "zod";

/**
 * Parses `input` against `schema`. On failure, sends a 400 with the
 * field-level errors and returns undefined - callers should `return` when
 * they get undefined back, since the response has already been sent.
 */
export function validate<T>(
  schema: ZodType<T>,
  input: unknown, // input will either be req.body or req.query in this case.
  res: Response,
): T | undefined {
  // Parses the input against a zod schema, and returns the parsed
  // data if it succeeds.
  const parsed = schema.safeParse(input);
  if (parsed.success) return parsed.data;

  // If parsing fails, respond to the client with the errors.
  // The flattenError-function produces a more readable error-object.
  res.status(400).json({ error: flattenError(parsed.error).fieldErrors });
  return undefined;
}
