import db from "../db/db.js";
import type { ProductCreate, ProductOutput } from "../types/product.js";

/**
 * Groups flat JOIN results into products with embedded images arrays.
 * SQLite returns one row per (product, image) pair when JOINing —
 * this collapses them into a single product per id with its images.
 *
 * Note: SQLite aliases like "images.id" become flat keys (e.g. row["images.id"]),
 * not nested objects (row.images).
 */
function groupResults(rows: unknown[]): ProductOutput[] {
  const productMap = new Map<number, ProductOutput>();

  for (const row of rows) {
    const rowTyped = row as Record<string, unknown>;
    const imageUrl = rowTyped["images.url"] as string | null | undefined;
    const images: string[] = imageUrl ? [imageUrl] : [];
    const existing = productMap.get(rowTyped.id as number);
    if (existing) {
      existing.images.push(...images);
    } else {
      productMap.set(rowTyped.id as number, {
        id: Number(rowTyped.id),
        title: String(rowTyped.title),
        description: String(rowTyped.description),
        gender: String(rowTyped.gender),
        price: Number(rowTyped.price),
        prev_price: rowTyped.prev_price === null ? null : Number(rowTyped.prev_price),
        discount: Boolean(rowTyped.discount),
        created_at: String(rowTyped.created_at),
        category_name: String(rowTyped.category_name),
        brand_name: String(rowTyped.brand_name),
        images,
      });
    }
  }

  return Array.from(productMap.values());
}

/**
 * Builds the base product query with a LEFT JOIN to product_images.
 * Returns raw rows that need to be grouped by the caller.
 */
function baseQuery(sql: string, params: (string | number)[]) {
  return db
    .prepare(
      `SELECT p.*,
              pi.id AS "images.id",
              pi.product_id AS "images.product_id",
              pi.url AS "images.url",
              pi.is_main AS "images.is_main",
              pi.sort_order AS "images.sort_order"
       FROM products p
       LEFT JOIN product_images pi ON p.id = pi.product_id
       ${sql}`,
    )
    .all(...params) as Array<ProductOutput & { "images.url": string | null }>;
}

export const productRepo = {
  getAll: (): ProductOutput[] => {
    const rows = baseQuery("ORDER BY p.id ASC", []);
    return groupResults(rows);
  },

  getById: (id: number): ProductOutput | undefined => {
    const rows = baseQuery("WHERE p.id = ? ORDER BY p.id ASC", [id]);
    const grouped = groupResults(rows);
    return grouped[0];
  },

  search: (options: {
    q?: string;
    brand?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    gender?: string;
  }): ProductOutput[] => {
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
    const rows = baseQuery(`${whereClause} ORDER BY p.id ASC`, params);
    return groupResults(rows);
  },

  getByBrand: (brandName: string): ProductOutput[] => {
    const rows = baseQuery(
      "WHERE LOWER(p.brand_name) = LOWER(?) ORDER BY p.id ASC",
      [brandName],
    );
    return groupResults(rows);
  },

  getByCategory: (categoryName: string): ProductOutput[] => {
    const rows = baseQuery(
      "WHERE LOWER(p.category_name) = LOWER(?) ORDER BY p.id ASC",
      [categoryName],
    );
    return groupResults(rows);
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
        data.discount ? 1 : 0,
        data.category_name ?? "Other",
        data.brand_name ?? "Angular Apparel",
      );

    return {
      id: Number(result.lastInsertRowid),
      title: data.title,
      description: data.description,
      gender: data.gender,
      price: data.price,
      prev_price: data.prev_price ?? null,
      discount: !!data.discount,
      created_at: new Date().toISOString(),
      category_name: data.category_name ?? "Other",
      brand_name: data.brand_name ?? "Angular Apparel",
      images: [],
    };
  },

  update: (id: number, data: Partial<ProductCreate>): ProductOutput | undefined => {
    const existing = productRepo.getById(id);
    if (!existing) return undefined;

    const updates: string[] = [];
    const values: (string | number | boolean | null)[] = [];

    if (data.title !== undefined) {
      updates.push("title = ?");
      values.push(data.title);
    }
    if (data.description !== undefined) {
      updates.push("description = ?");
      values.push(data.description);
    }
    if (data.gender !== undefined) {
      updates.push("gender = ?");
      values.push(data.gender);
    }
    if (data.price !== undefined) {
      updates.push("price = ?");
      values.push(data.price);
    }
    if (data.prev_price !== undefined) {
      updates.push("prev_price = ?");
      values.push(data.prev_price);
    }
    if (data.discount !== undefined) {
      updates.push("discount = ?");
      values.push(data.discount);
    }
    if (data.category_name !== undefined) {
      updates.push("category_name = ?");
      values.push(data.category_name);
    }
    if (data.brand_name !== undefined) {
      updates.push("brand_name = ?");
      values.push(data.brand_name);
    }

    if (updates.length > 0) {
      values.push(id);
      db.prepare(
        `UPDATE products SET ${updates.join(", ")} WHERE id = ?`,
      ).run(...values);
    }

    return productRepo.getById(id);
  },

  delete: (id: number): void => {
    db.prepare("DELETE FROM products WHERE id = ?").run(id);
  },
};
