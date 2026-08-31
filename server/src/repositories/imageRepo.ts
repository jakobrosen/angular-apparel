import db from "../db/db.js";
import type { ProductImage } from "../types/product.js";

export const imageRepo = {
  /**
   * Insert a single image for a product.
   */
  create: (productId: number, url: string): ProductImage => {
    const result = db
      .prepare("INSERT INTO product_images (product_id, url) VALUES (?, ?)")
      .run(productId, url);

    return {
      id: Number(result.lastInsertRowid),
      product_id: productId,
      url,
    };
  },

  /**
   * Get all images for a product, ordered by insertion order.
   */
  getByProduct: (productId: number): ProductImage[] => {
    return db
      .prepare(
        `SELECT * FROM product_images WHERE product_id = ? ORDER BY id ASC`,
      )
      .all(productId) as ProductImage[];
  },

  /**
   * Delete a single image by its ID.
   */
  deleteById: (id: number): void => {
    db.prepare("DELETE FROM product_images WHERE id = ?").run(id);
  },

  /**
   * Delete all images for a product.
   */
  deleteByProduct: (productId: number): void => {
    db
      .prepare("DELETE FROM product_images WHERE product_id = ?")
      .run(productId);
  },
};
