import { flattenError, type ZodType } from "zod";
import { HttpError } from "./httpError.js";

/**
 * Parses `input` against `schema` and returns the parsed data. If it doesn't
 * match, throws a 400 HttpError carrying zod's field-level errors, so callers
 * can use the result straight away instead of testing for a failure value.
 */
export function validate<T>(schema: ZodType<T>, input: unknown): T {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    // flattenError produces a readable { field: [messages] } object.
    throw new HttpError(400, flattenError(parsed.error).fieldErrors);
  }
  return parsed.data;
}
