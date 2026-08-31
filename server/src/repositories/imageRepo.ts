import db from "../db/db.js";
import type { ProductImage } from "../types/product.js";

export const imageRepo = {
  /**
   * Insert a single image for a product.
   */
  create: (
    productId: number,
    url: string,
    isMain: boolean,
    sortOrder: number,
  ): ProductImage => {
    const result = db
      .prepare(
        `INSERT INTO product_images (product_id, url, is_main, sort_order)
         VALUES (?, ?, ?, ?)`,
      )
      .run(productId, url, isMain, sortOrder);

    return {
      id: Number(result.lastInsertRowid),
      product_id: productId,
      url,
      is_main: isMain,
      sort_order: sortOrder,
    };
  },

  /**
   * Get all images for a product, ordered by sort_order.
   */
  getByProduct: (productId: number): ProductImage[] => {
    return db
      .prepare(
        `SELECT * FROM product_images WHERE product_id = ? ORDER BY sort_order ASC`,
      )
      .all(productId) as ProductImage[];
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
