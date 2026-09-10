import type { NextFunction, Request, Response } from "express";
import { UniqueConstraintError } from "sequelize";

/**
 * Egen error-klass som underlättar när ett fel kastas i route handlers.
 * Tack vare denna kan statuskod och felmeddelande matas in direkt i
 * constructorn istället för att bara använda oss av Errors .message.
 */
export class HttpError extends Error {
  constructor(
    readonly status: number,
    // .details kan vara en sträng eller ett zod-object.
    readonly details: string | object,
  ) {
    // Om .details är en sträng så dupliceras den till .message också.
    // Annars (om det är ett zod-object) får .message ett standardvärde.
    super(typeof details === "string" ? details : "Request validation failed");
    this.name = "HttpError";
  }
}

/**
 * Tack vare att vi registrerar error handlern med app.use(errorHandler)
 * i server.ts så skickas alla fel som kastas hit automatiskt. Eftersom
 * vi använder Express 5 så skickas även rejected promises hit, vilket
 * innebär att try/catch inte behöver användas alls i route handlers.
 */
export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
): void {
  // Om en response redan är på väg till klienten när ett fel kastas så
  // anropas next(err) här för att skicka vidare felet till nästa error
  // handler i kedjan, i detta fall express egna. Detta görs eftersom att
  // min egna error handler inte kan hantera denna situation.
  if (res.headersSent) {
    next(err);
    return;
  }

  // Om felet kastas som ett HttpError kan vi svara direkt med statuskoden
  // och details-strängen/objektet.
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.details });
    return;
  }

  // Kastas av sequelize vid unique constraint violations (om en resurs redan finns).
  if (err instanceof UniqueConstraintError) {
    // 409 conflict.
    res.status(409).json({ error: "A resource with that name already exists" });
    return;
  }

  // Kastas av express.json() om klienten skickar ogiltig JSON i request body.
  if (err instanceof SyntaxError && "status" in err && err.status === 400) {
    res.status(400).json({ error: "Invalid JSON body" });
    return;
  }

  // Skickar ett generiskt felmeddelande om ingen av if-satserna ovan triggats.
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
}
