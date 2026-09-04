import { Op, type Attributes, type WhereOptions } from "sequelize";
import type { Product } from "../models/index.js";
import type { ProductFilters } from "../types/validators.js";

/**
 * Turns a parsed `ProductFilters` into a Sequelize `where` clause for
 * `Product`. Shared by every browse route (general list, brand-scoped,
 * category-scoped, gender-scoped) so the price range and the
 * gender-includes-Unisex rule are each implemented once instead of copied
 * into every route. `brandId`/`categoryId` are plain ids already, so this
 * needs no DB lookup and stays synchronous.
 */
export function buildProductWhere(
  filters: ProductFilters,
): WhereOptions<Attributes<Product>> {
  return {
    ...(filters.brandId !== undefined && { brandId: filters.brandId }),
    ...(filters.categoryId !== undefined && { categoryId: filters.categoryId }),
    ...(filters.gender && {
      gender:
        filters.gender === "Unisex"
          ? "Unisex"
          : { [Op.in]: [filters.gender, "Unisex"] },
    }),
    ...((filters.minPrice !== undefined || filters.maxPrice !== undefined) && {
      price: {
        ...(filters.minPrice !== undefined && { [Op.gte]: filters.minPrice }),
        ...(filters.maxPrice !== undefined && { [Op.lte]: filters.maxPrice }),
      },
    }),
  };
}
