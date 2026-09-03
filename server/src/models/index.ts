import { sequelize } from "./sequelize.js";
import { Category } from "./Category.js";
import { Brand } from "./Brand.js";
import { Product } from "./Product.js";
import { ProductImage } from "./ProductImage.js";
import { AdminUser } from "./AdminUser.js";

// Connects products with categories
Category.hasMany(Product, { foreignKey: "categoryId", onDelete: "SET NULL" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

// Connects products with brands
Brand.hasMany(Product, { foreignKey: "brandId", onDelete: "SET NULL" });
Product.belongsTo(Brand, { foreignKey: "brandId", as: "brand" });

// Connects products with images
Product.hasMany(ProductImage, {
  foreignKey: "productId",
  as: "images",
  onDelete: "CASCADE",
});
ProductImage.belongsTo(Product, { foreignKey: "productId" });

export { sequelize, Category, Brand, Product, ProductImage, AdminUser };
