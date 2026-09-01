import db from "../config/db.js";
import type { PaginatedResult } from "../types/api.js";
import type { ProductCreate, ProductOutput } from "../types/product.js";

/** Converts a flat SQLite row into a ProductOutput. */
function toProduct(row: Record<string, unknown>): ProductOutput {
  return {
    id: Number(row.id),
    title: String(row.title),
    description: String(row.description),
    gender: String(row.gender),
    price: Number(row.price),
    prev_price: row.prev_price == null ? null : Number(row.prev_price),
    discount: Boolean(row.discount),
    created_at: String(row.created_at),
    category_name: String(row.category_name),
    brand_name: String(row.brand_name),
    images: [],
  };
}

/** Base SQL for fetching a product with its embedded images. */
const WITH_IMAGES = `SELECT p.*,
        pi.id AS "images.id",
        pi.product_id AS "images.product_id",
        pi.url AS "images.url"
 FROM products p
 LEFT JOIN product_images pi ON p.id = pi.product_id`;

/** Groups flat JOIN rows into products with embedded images arrays. */
function groupResults(rows: unknown[]): ProductOutput[] {
  const productMap = new Map<number, ProductOutput>();

  for (const row of rows) {
    const r = row as Record<string, unknown>;
    const product = productMap.get(r.id as number) ?? toProduct(r);
    const url = r["images.url"] as string | null | undefined;
    if (url) product.images.push(url);
    productMap.set(r.id as number, product);
  }

  return Array.from(productMap.values());
}

/** Fetches products by ID list with their images, then groups results. */
function getProductsByIds(ids: number[]): ProductOutput[] {
  if (!ids.length) return [];
  const placeholders = ids.map(() => "?").join(",");
  const rows = db
    .prepare(`${WITH_IMAGES} WHERE p.id IN (${placeholders}) ORDER BY p.id ASC`)
    .all(...ids) as Array<ProductOutput & { "images.url": string | null }>;
  return groupResults(rows);
}

/** Paginates by product IDs first, then fetches with images. */
function paginate(
  countSql: string,
  countParams: (string | number)[],
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
  return { data: getProductsByIds(ids), total: total.count, page, limit };
}

export const productRepo = {
  getAll: (page = 1, limit = 48): PaginatedResult<ProductOutput> => {
    return paginate(
      "SELECT COUNT(*) as count FROM products",
      [],
      "SELECT id FROM products ORDER BY id ASC",
      [],
      page,
      limit,
    );
  },

  getById: (id: number): ProductOutput | undefined => {
    const rows = db
      .prepare(`${WITH_IMAGES} WHERE p.id = ?`)
      .all(id) as Array<ProductOutput & { "images.url": string | null }>;
    return groupResults(rows)[0];
  },

  search: (options: {
    q?: string;
    brand?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    gender?: string;
    page?: number;
    limit?: number;
  }): PaginatedResult<ProductOutput> => {
    const page = options.page ?? 1;
    const limit = options.limit ?? 48;

    const conditions: string[] = [];
    const params: (string | number)[] = [];

    if (options.q) {
      conditions.push("(p.title LIKE ? OR p.brand_name LIKE ? OR p.category_name LIKE ?)");
      params.push(`%${options.q}%`, `%${options.q}%`, `%${options.q}%`);
    }
    if (options.brand) {
      conditions.push("LOWER(p.brand_name) = LOWER(?)");
      params.push(options.brand);
    }
    if (options.category) {
      conditions.push("LOWER(p.category_name) = LOWER(?)");
      params.push(options.category);
    }
    if (options.minPrice !== undefined) {
      conditions.push("p.price >= ?");
      params.push(options.minPrice);
    }
    if (options.maxPrice !== undefined) {
      conditions.push("p.price <= ?");
      params.push(options.maxPrice);
    }
    if (options.gender) {
      conditions.push("p.gender = ?");
      params.push(options.gender);
    }

    const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
    const countSql = `SELECT COUNT(*) as count FROM products p ${whereClause}`;
    const total = db.prepare(countSql).get(...params) as { count: number };
    const offset = (page - 1) * limit;

    const idSql = `SELECT p.id FROM products p ${whereClause}`;
    const productIds = db
      .prepare(`${idSql} ORDER BY p.id ASC LIMIT ? OFFSET ?`)
      .all(...[...params, limit, offset]) as Array<{ id: number }>;
    const ids = productIds.map((p) => p.id);

    return { data: getProductsByIds(ids), total: total.count, page, limit };
  },

  getByBrand: (brandName: string, page = 1, limit = 48): PaginatedResult<ProductOutput> => {
    return paginate(
      "SELECT COUNT(*) as count FROM products p WHERE LOWER(p.brand_name) = LOWER(?)",
      [brandName],
      "SELECT id FROM products p WHERE LOWER(p.brand_name) = LOWER(?)",
      [brandName],
      page,
      limit,
    );
  },

  getByCategory: (categoryName: string, page = 1, limit = 48): PaginatedResult<ProductOutput> => {
    return paginate(
      "SELECT COUNT(*) as count FROM products p WHERE LOWER(p.category_name) = LOWER(?)",
      [categoryName],
      "SELECT id FROM products p WHERE LOWER(p.category_name) = LOWER(?)",
      [categoryName],
      page,
      limit,
    );
  },

  create: (data: ProductCreate): ProductOutput => {
    const result = db
      .prepare(
        `INSERT INTO products (title, description, gender, price, prev_price, discount, category_name, brand_name)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        data.title,
        data.description,
        data.gender,
        data.price,
        data.prev_price ?? null,
        Number(data.discount),
        data.category_name ?? "Other",
        data.brand_name ?? "Angular Apparel",
      );

    return productRepo.getById(Number(result.lastInsertRowid))!;
  },

  update: (id: number, data: Partial<ProductCreate>): ProductOutput | undefined => {
    const existing = productRepo.getById(id);
    if (!existing) return undefined;

    const updates: string[] = [];
    const values: (string | number | boolean | null)[] = [];

    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined) {
        updates.push(`${key} = ?`);
        values.push(value);
      }
    }

    if (updates.length > 0) {
      values.push(id);
      db.prepare(`UPDATE products SET ${updates.join(", ")} WHERE id = ?`).run(...values);
    }

    return productRepo.getById(id);
  },

  delete: (id: number): void => {
    db.prepare("DELETE FROM products WHERE id = ?").run(id);
  },
};
