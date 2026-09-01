import db from "../config/db.js";
import type { PaginatedResult } from "../types/api.js";
import type { ProductOutput } from "../types/product.js";
import { getProductsByIds } from "../repositories/productRepo.js";

/** Paginates by entity IDs first, then fetches with images. */
export function paginate(
  countSql: string,
  countParams: (string | number)[],
  withImagesSql: string,
  idSql: string,
  idParams: (string | number)[],
  page: number,
  limit: number,
): PaginatedResult<ProductOutput> {
  const offset = (page - 1) * limit;
  const total = db.prepare(countSql).get(...countParams) as { count: number };
  const productIds = db
    .prepare(`${idSql} LIMIT ? OFFSET ?`)
    .all(...[...idParams, limit, offset]) as Array<{ id: number }>;
  const ids = productIds.map((p) => p.id);
  return { data: getProductsByIds(ids, withImagesSql), total: total.count, page, limit };
}
