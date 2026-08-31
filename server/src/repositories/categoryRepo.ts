import db from "../db/db.js";
import type { CategoryInput, CategoryOutput } from "../types/category.js";

export const categoryRepo = {
  getAll: (): CategoryOutput[] => {
    return db.prepare("SELECT * FROM categories ORDER BY id ASC").all() as CategoryOutput[];
  },

  getById: (id: number): CategoryOutput | undefined => {
    return db.prepare("SELECT * FROM categories WHERE id = ?").get(id) as
      | CategoryOutput
      | undefined;
  },

  getByName: (name: string): CategoryOutput | undefined => {
    return db.prepare("SELECT * FROM categories WHERE name = ?").get(name) as
      | CategoryOutput
      | undefined;
  },

  create: (data: CategoryInput): CategoryOutput => {
    const result = db
      .prepare("INSERT INTO categories (name) VALUES (?)")
      .run(data.name);

    return {
      id: Number(result.lastInsertRowid),
      name: data.name,
      created_at: new Date().toISOString(),
    };
  },

  update: (
    id: number,
    data: Partial<CategoryInput>,
  ): CategoryOutput | undefined => {
    const existing = categoryRepo.getById(id);
    if (!existing) return undefined;

    const updates: string[] = [];
    const values: (string | number)[] = [];

    if (data.name !== undefined) {
      updates.push("name = ?");
      values.push(data.name);
    }

    if (updates.length > 0) {
      values.push(id);
      db.prepare(
        `UPDATE categories SET ${updates.join(", ")} WHERE id = ?`,
      ).run(...values);
    }

    return categoryRepo.getById(id);
  },

  delete: (id: number): void => {
    db.prepare("DELETE FROM categories WHERE id = ?").run(id);
  },
};
