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

const SPREAD_DAYS = 100;

function publishedAtFromSku(sku: string): Date {
  let hash = 0;
  for (const char of sku) {
    hash = (hash * 31 + char.charCodeAt(0)) % SPREAD_DAYS;
  }

  const date = new Date();
  date.setDate(date.getDate() - hash);
  return date;
}

async function seed(): Promise<void> {
  console.log("Starting seed...");

  await sequelize.sync();

  const transaction = await sequelize.transaction();

  async function standardBulkCreate<M extends Model>(
    model: ModelStatic<M>,
    data: CreationAttributes<M>[],
  ): Promise<void> {
    await model.bulkCreate(data, {
      ignoreDuplicates: true,
      transaction,
    });
  }

  const passwordHash = bcrypt.hashSync("admin");
  await AdminUser.findOrCreate({
    where: { username: "admin" },
    defaults: { username: "admin", passwordHash },
    transaction,
  });

  await standardBulkCreate(Category, dummyCategoryData);
  await standardBulkCreate(Brand, dummyBrandData);
  await standardBulkCreate(
    Product,
    dummyProductData.map((product) => ({
      ...product,
      publishedAt: publishedAtFromSku(product.sku),
    })),
  );
  await standardBulkCreate(ProductImage, dummyImageData);

  await transaction.commit();
  console.log("Seed completed.");
}

seed();
