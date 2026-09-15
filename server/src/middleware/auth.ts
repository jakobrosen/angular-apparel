import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/variables.js";
import { HttpError } from "./errorHandler.js";

/**
 * Middleware som kontrollerar att en giltig JWT skickats med.
 */
export function requireAuth(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length)
    : undefined;

  if (!token) throw new HttpError(401, "Unauthorized");

  try {
    jwt.verify(token, JWT_SECRET);
  } catch {
    throw new HttpError(401, "Unauthorized");
  }

  next();
}
