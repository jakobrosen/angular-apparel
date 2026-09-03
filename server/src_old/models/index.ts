import { sequelize } from "./sequelize.js";
import { Category } from "./Category.js";
import { Brand } from "./Brand.js";
import { Product } from "./Product.js";
import { ProductImage } from "./ProductImage.js";
import { AdminUser } from "./AdminUser.js";

// Products keep their category/brand on delete (SET NULL) rather than the
// old schema's "fall back to a hardcoded default row" behavior, which relied
// on rows that nothing guaranteed would exist.
Category.hasMany(Product, { foreignKey: "categoryId", onDelete: "SET NULL" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

Brand.hasMany(Product, { foreignKey: "brandId", onDelete: "SET NULL" });
Product.belongsTo(Brand, { foreignKey: "brandId", as: "brand" });

Product.hasMany(ProductImage, {
  foreignKey: "productId",
  as: "images",
  onDelete: "CASCADE",
});
ProductImage.belongsTo(Product, { foreignKey: "productId" });

export { sequelize, Category, Brand, Product, ProductImage, AdminUser };
