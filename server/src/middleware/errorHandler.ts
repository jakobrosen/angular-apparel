import type { NextFunction, Request, Response } from "express";

// Express 5 forwards rejected promises from async route handlers here
// automatically, so routes don't need their own try/catch or a wrapper.
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}
