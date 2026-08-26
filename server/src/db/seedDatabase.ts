import db from "./db.js";
import { categories, brands, products } from "./dummyData.js";

function seed(): void {
  console.log("Starting seed...");

  // Seed categories and brands in a single transaction
  const insertCategory = db.prepare(
    "INSERT OR IGNORE INTO categories (name) VALUES (?)",
  );
  const insertBrand = db.prepare(
    "INSERT OR IGNORE INTO brands (name) VALUES (?)",
  );

  const insertProduct = db.prepare(
    `INSERT INTO products (title, description, gender, price, prev_price, discount, category_name, brand_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  );

  const insertImage = db.prepare(
    `INSERT INTO product_images (product_id, url, is_main, sort_order)
    VALUES (?, ?, ?, ?)`,
  );

  // Single transaction for everything
  const runSeed = db.transaction(() => {
    // Categories
    for (const name of categories) {
      insertCategory.run(name);
    }
    console.log(`  Categories: ${categories.length}`);

    // Brands
    for (const name of brands) {
      insertBrand.run(name);
    }
    console.log(`  Brands: ${brands.length}`);

    // Products + images
    for (const product of products) {
      const result = insertProduct.run(
        product.title,
        product.description,
        product.gender,
        product.price,
        product.prevPrice ?? null,
        product.discount ? 1 : 0,
        product.category ?? "Other",
        product.brand ?? "Angular Apparel",
      );

      const productId = result.lastInsertRowid as number;

      for (let i = 0; i < product.images.length; i++) {
        insertImage.run(productId, product.images[i], i === 0 ? 1 : 0, i);
      }
    }
  });

  runSeed();
  console.log(`  Products: ${products.length}`);
  console.log("Seed complete!");
}

seed();
