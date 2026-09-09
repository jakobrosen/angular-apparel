/**
 * An error that already knows which HTTP response it should become.
 *
 * Throwing one of these anywhere in a route or middleware is enough: Express
 * catches both synchronous throws and rejected promises from handlers and
 * passes them to `errorHandler`, which turns an HttpError into its status and
 * body. Nothing in between needs a try/catch or a "did the helper already
 * respond?" check.
 */
export class HttpError extends Error {
  /**
   * @param status HTTP status to respond with.
   * @param details Value sent under the response's `error` key - a plain
   *   message for most failures, or zod's field-errors object when a request
   *   body/query fails validation.
   */
  constructor(
    readonly status: number,
    readonly details: string | object,
  ) {
    super(typeof details === "string" ? details : "Request validation failed");
  }
}
