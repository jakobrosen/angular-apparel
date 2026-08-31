import db from "./db.js";
import bcrypt from "bcryptjs";
import { categories, brands, products } from "./dummyData.js";

function seed(): void {
  console.log("Starting seed...");

  // Seed admin user
  const passwordHash = bcrypt.hashSync("admin", 10);
  const insertAdmin = db.prepare(
    "INSERT OR IGNORE INTO admin_users (username, password_hash) VALUES (?, ?)",
  );
  insertAdmin.run("admin", passwordHash);
  console.log("  Admin user: admin");

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
    `INSERT INTO product_images (product_id, url) VALUES (?, ?)`,
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

      for (const url of product.images) {
        insertImage.run(productId, url);
      }
    }
  });

  runSeed();
  console.log(`  Products: ${products.length}`);
  console.log("Seed complete!");
}

seed();
