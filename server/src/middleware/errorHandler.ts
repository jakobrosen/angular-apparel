import type { NextFunction, Request, Response } from "express";
import { UniqueConstraintError } from "sequelize";
import { HttpError } from "../utilities/httpError.js";

// Express 5 forwards rejected promises from async route handlers here
// automatically, and catches synchronous throws from ordinary middleware too,
// so routes don't need their own try/catch or a wrapper.
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
): void {
  // A response is already on the wire and can't be replaced with an error
  // one - Express's built-in handler is the only thing that can close it out.
  if (res.headersSent) {
    next(err);
    return;
  }

  // Deliberate, client-caused failures (bad input, missing row, bad token).
  // Not logged: they're expected outcomes, not faults on our side.
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.details });
    return;
  }

  // Reaches us from the database rather than from a validator - e.g. creating
  // a brand whose name is already taken - but it's still the request at fault,
  // so it shouldn't be reported as a server error.
  if (err instanceof UniqueConstraintError) {
    res.status(409).json({ error: "Already exists" });
    return;
  }

  // express.json() rejects an unparseable body with a SyntaxError that already
  // carries the status it wants. Also the client's fault, not ours.
  if (err instanceof SyntaxError && "status" in err && err.status === 400) {
    res.status(400).json({ error: "Malformed JSON body" });
    return;
  }

  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}
