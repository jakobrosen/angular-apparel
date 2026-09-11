import {
  sequelize,
  Category,
  Brand,
  Product,
  ProductImage,
  AdminUser,
} from "../models/index.js";
import { Model, ModelStatic, CreationAttributes } from "sequelize";
import {
  dummyCategoryData,
  dummyBrandData,
  dummyProductData,
  dummyImageData,
} from "./dummyData.js";
import bcrypt from "bcryptjs";

/**
 * Skapar databastabeller och seedar databasen
 * med data från dummyData.ts.
 */
async function seed(): Promise<void> {
  console.log("Starting seed...");

  // Skapar databastabeller för alla sequelize models.
  await sequelize.sync();

  // Startar en transaction för att alla databasoperationer
  // ska ske samtidigt.
  const transaction = await sequelize.transaction();

  /**
   * Samma kod användes för tre modeller, så det fick bli
   * en funktion.
   */
  async function standardBulkCreate<M extends Model>(
    model: ModelStatic<M>,
    data: CreationAttributes<M>[],
  ): Promise<void> {
    await model.bulkCreate(data, {
      ignoreDuplicates: true,
      transaction,
    });
  }

  // findOrCreate används här för att undvika att ett UniqueConstraintError
  // kastas om seed() körs när admin-användaren redan finns i databasen.
  const passwordHash = bcrypt.hashSync("admin");
  await AdminUser.findOrCreate({
    where: { username: "admin" },
    defaults: { username: "admin", passwordHash },
    transaction,
  });

  await standardBulkCreate(Category, dummyCategoryData);
  await standardBulkCreate(Brand, dummyBrandData);
  await standardBulkCreate(Product, dummyProductData);
  await standardBulkCreate(ProductImage, dummyImageData);

  await transaction.commit();
  console.log("Seed completed.");
}

seed();
