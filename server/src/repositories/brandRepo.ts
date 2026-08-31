import db from "../db/db.js";
import type { BrandInput, BrandOutput } from "../types/brand.js";

export const brandRepo = {
  getAll: (): BrandOutput[] => {
    return db.prepare("SELECT * FROM brands ORDER BY id ASC").all() as BrandOutput[];
  },

  getById: (id: number): BrandOutput | undefined => {
    return db.prepare("SELECT * FROM brands WHERE id = ?").get(id) as
      | BrandOutput
      | undefined;
  },

  getByName: (name: string): BrandOutput | undefined => {
    return db.prepare("SELECT * FROM brands WHERE LOWER(name) = LOWER(?)").get(name) as
      | BrandOutput
      | undefined;
  },

  create: (data: BrandInput): BrandOutput => {
    const result = db
      .prepare("INSERT INTO brands (name) VALUES (?)")
      .run(data.name);

    return {
      id: Number(result.lastInsertRowid),
      name: data.name,
      created_at: new Date().toISOString(),
    };
  },

  update: (id: number, data: Partial<BrandInput>): BrandOutput | undefined => {
    const existing = brandRepo.getById(id);
    if (!existing) return undefined;

    const updates: string[] = [];
    const values: (string | number)[] = [];

    if (data.name !== undefined) {
      updates.push("name = ?");
      values.push(data.name);
    }

    if (updates.length > 0) {
      values.push(id);
      db.prepare(`UPDATE brands SET ${updates.join(", ")} WHERE id = ?`).run(
        ...values,
      );
    }

    return brandRepo.getById(id);
  },

  delete: (id: number): void => {
    db.prepare("DELETE FROM brands WHERE id = ?").run(id);
  },
};
