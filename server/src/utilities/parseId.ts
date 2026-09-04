import type { Request, Response } from "express";

/**
 * Reads `req.params.id` as a positive integer. On failure, sends a 400 and
 * returns `null` — callers should `return` when they get `null` back, same
 * convention as `validate`.
 */
export function parseId(req: Request, res: Response): number | null {
  const raw = req.params["id"];
  const id = typeof raw === "string" ? Number(raw) : NaN;
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ error: "Invalid id" });
    return null;
  }
  return id;
}
