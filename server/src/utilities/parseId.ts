import type { Request } from "express";
import { HttpError } from "./httpError.js";

/**
 * Reads `req.params.id` as a positive integer, throwing a 400 HttpError if it
 * isn't one.
 */
export function parseId(req: Request): number {
  const raw = req.params["id"];
  const id = typeof raw === "string" ? Number(raw) : NaN;
  if (!Number.isInteger(id) || id <= 0) {
    throw new HttpError(400, "Invalid id");
  }
  return id;
}
