import { HttpError } from "../middleware/errorHandler.js";

export function validateSKU(sku: string): void {
  const SKURegex = /^[A-Z]{3}\d{3}$/;

  if (!SKURegex.test(sku)) throw new HttpError(400, "Invalid SKU format");
}
