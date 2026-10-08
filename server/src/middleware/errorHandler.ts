import type { NextFunction, Request, Response } from "express";
import { ForeignKeyConstraintError, UniqueConstraintError } from "sequelize";

export class HttpError extends Error {
  constructor(
    readonly status: number,
    readonly details: string | object,
  ) {
    super(typeof details === "string" ? details : "Request validation failed");
    this.name = "HttpError";
  }
}

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (res.headersSent) {
    next(err);
    return;
  }

  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.details });
    return;
  }

  if (err instanceof UniqueConstraintError) {
    const field = err.errors[0]?.path ?? "value";
    res
      .status(409)
      .json({ error: `A resource with that ${field} already exists` });
    return;
  }

  if (err instanceof ForeignKeyConstraintError) {
    res.status(400).json({ error: "Referenced resource does not exist" });
    return;
  }

  if (err instanceof SyntaxError && "status" in err && err.status === 400) {
    res.status(400).json({ error: "Invalid JSON body" });
    return;
  }

  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}
