import db from "./db.js";
import { categories, brands, products } from "./dummyData.js";

function seed() {
  console.log("Starting seed...");

  // Collect all unique categories and brands from products,
  // then merge with the static lists so we don't miss any.
  const allCategories = [
    ...new Set([...categories, ...products.map((p) => p.category)]),
  ];
  const allBrands = [...new Set([...brands, ...products.map((p) => p.brand)])];

  // --- Categories ---
  const insertCategory = db.prepare(
    "INSERT OR IGNORE INTO categories (name) VALUES (?)",
  );
  const runInsertCategory = db.transaction((rows) => {
    for (const [name] of rows) {
      insertCategory.run(name);
    }
  });
  runInsertCategory(allCategories.map((name) => [name]));
  console.log(`  Categories: ${allCategories.length} inserted/ignored`);

  // --- Brands ---
  const insertBrand = db.prepare(
    "INSERT OR IGNORE INTO brands (name) VALUES (?)",
  );
  const runInsertBrand = db.transaction((rows) => {
    for (const [name] of rows) {
      insertBrand.run(name);
    }
  });
  runInsertBrand(allBrands.map((name) => [name]));
  console.log(`  Brands: ${allBrands.length} inserted/ignored`);

  // --- Products + Images ---
  const insertProduct = db.prepare(
    `INSERT INTO products (title, description, gender, price, prev_price, discount, category_name, brand_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  );

  const insertImage = db.prepare(
    `INSERT INTO product_images (product_id, url, is_main, sort_order)
    VALUES (?, ?, ?, ?)`,
  );

  const runProductSeed = db.transaction((productList) => {
    for (const product of productList) {
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

      const images = product.images ?? [];
      for (let i = 0; i < images.length; i++) {
        insertImage.run(productId, images[i], i === 0 ? 1 : 0, i);
      }
    }
  });

  runProductSeed(products);
  console.log(`  Products: ${products.length} with images inserted`);

  console.log("Seed complete!");
}

seed();
