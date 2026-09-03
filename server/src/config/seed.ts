import bcrypt from "bcryptjs";
import {
  sequelize,
  Category,
  Brand,
  Product,
  ProductImage,
  AdminUser,
} from "../models/index.js";
import { categories, brands, products } from "./dummyData.js";
import type { Gender } from "../types/validators.js";

// Seed-function that adds dummy data to the db.
async function seed(): Promise<void> {
  console.log("Starting seed...");

  // Basically corresponds to CREATE TABLE IF NOT EXISTS
  // for each model defined with .init().
  await sequelize.sync();

  //
  await sequelize.transaction(async (transaction) => {
    // Admin user
    const passwordHash = bcrypt.hashSync("admin", 10);
    await AdminUser.findOrCreate({
      where: { username: "admin" },
      defaults: { username: "admin", passwordHash },
      transaction,
    });
    console.log("  Admin user: admin");

    // Categories and brands
    await Category.bulkCreate(
      categories.map((name) => ({ name })),
      { ignoreDuplicates: true, transaction },
    );
    console.log(`  Categories: ${categories.length}`);

    await Brand.bulkCreate(
      brands.map((name) => ({ name })),
      { ignoreDuplicates: true, transaction },
    );
    console.log(`  Brands: ${brands.length}`);

    // Look their ids back up so products can reference them by id.
    const categoryIdByName = new Map(
      (await Category.findAll({ transaction })).map((c) => [c.name, c.id]),
    );
    const brandIdByName = new Map(
      (await Brand.findAll({ transaction })).map((b) => [b.name, b.id]),
    );

    // Products + images. Inserted one at a time (rather than bulkCreate) so
    // each product's generated id is reliably available for its images —
    // 172 sequential inserts inside one transaction is effectively instant.
    for (const p of products) {
      const product = await Product.create(
        {
          title: p.title,
          description: p.description,
          gender: p.gender as Gender,
          price: p.price,
          prevPrice: p.prevPrice ?? null,
          categoryId: p.category
            ? (categoryIdByName.get(p.category) ?? null)
            : null,
          brandId: p.brand ? (brandIdByName.get(p.brand) ?? null) : null,
        },
        { transaction },
      );

      if (p.images.length) {
        await ProductImage.bulkCreate(
          p.images.map((url) => ({ url, productId: product.id })),
          { transaction },
        );
      }
    }
    console.log(`  Products: ${products.length}`);
  });

  console.log("Seed complete!");
}

seed();
