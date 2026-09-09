import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/variables.js";
import { HttpError } from "../utilities/httpError.js";

/**
 * Gates admin routes behind a valid `Authorization: Bearer <token>` header.
 * No route currently needs the decoded payload (just an admin id), so this
 * only checks validity instead of attaching it to `req`.
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
    // Same message whether the token is expired, malformed or signed with the
    // wrong secret - which of those it is isn't the caller's business.
    throw new HttpError(401, "Unauthorized");
  }

  // Outside the try on purpose: anything the rest of the chain throws is for
  // errorHandler to classify, not for the catch above to relabel as a 401.
  next();
}
