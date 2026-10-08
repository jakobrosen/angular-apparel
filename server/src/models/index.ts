import { sequelize } from "./sequelize.js";
import { Category } from "./Category.js";
import { Brand } from "./Brand.js";
import { Product } from "./Product.js";
import { ProductImage } from "./ProductImage.js";
import { AdminUser } from "./AdminUser.js";

Category.hasMany(Product, { foreignKey: "categoryId", onDelete: "SET NULL" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

Brand.hasMany(Product, { foreignKey: "brandId", onDelete: "SET NULL" });
Product.belongsTo(Brand, { foreignKey: "brandId", as: "brand" });

Product.hasMany(ProductImage, {
  foreignKey: "sku",
  sourceKey: "sku",
  as: "images",
  onDelete: "CASCADE",
});
ProductImage.belongsTo(Product, { foreignKey: "sku" });

export { sequelize, Category, Brand, Product, ProductImage, AdminUser };
