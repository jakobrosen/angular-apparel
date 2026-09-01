import type { ProductOutput } from "../types/product.js";

/** Converts a flat SQLite row into a ProductOutput. */
export function parseProduct(row: Record<string, unknown>): ProductOutput {
  return {
    id: Number(row.id),
    title: String(row.title),
    description: String(row.description),
    gender: String(row.gender),
    price: Number(row.price),
    prev_price: row.prev_price == null ? null : Number(row.prev_price),
    discount: row.prev_price != null && Number(row.prev_price) > Number(row.price),
    created_at: String(row.created_at),
    category_name: String(row.category_name),
    brand_name: String(row.brand_name),
    images: [],
  };
}
