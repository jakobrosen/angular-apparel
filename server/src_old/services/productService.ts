import { Op, type WhereOptions } from "sequelize";
import { Product, Category, Brand, ProductImage } from "../models/index.js";
import { findByNameCI } from "../utilities/db.js";
import type { PaginatedResult } from "../types/api.js";
import type {
  ProductCreateInput,
  ProductUpdateInput,
} from "../types/validators.js";

export interface ProductSearchOptions {
  q?: string;
  brand?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  gender?: string;
  page?: number;
  limit?: number;
}

const includeAll = [
  { model: Category, as: "category" },
  { model: Brand, as: "brand" },
  { model: ProductImage, as: "images" },
];

/**
 * Resolves a ?brand=/?category= name filter to an id. A name with no match
 * resolves to an id that can never exist, so the search correctly returns
 * zero results instead of silently ignoring the filter.
 */
async function resolveNameFilter(
  model: typeof Brand | typeof Category,
  name: string | undefined,
): Promise<number | undefined> {
  if (!name) return undefined;
  const row = await findByNameCI(model, name);
  return row ? row.id : -1;
}

function buildWhere(
  options: ProductSearchOptions,
  brandId: number | undefined,
  categoryId: number | undefined,
): WhereOptions {
  const where: WhereOptions = {};
  if (options.gender) where.gender = options.gender;
  if (brandId !== undefined) where.brandId = brandId;
  if (categoryId !== undefined) where.categoryId = categoryId;
  if (options.minPrice !== undefined || options.maxPrice !== undefined) {
    where.price = {
      ...(options.minPrice !== undefined
        ? { [Op.gte]: options.minPrice }
        : {}),
      ...(options.maxPrice !== undefined
        ? { [Op.lte]: options.maxPrice }
        : {}),
    };
  }
  return where;
}

function hydrateByIds(ids: number[]): Promise<Product[]> {
  if (!ids.length) return Promise.resolve([]);
  return Product.findAll({
    where: { id: ids },
    include: includeAll,
    order: [["id", "ASC"]],
  });
}

export async function searchProducts(
  options: ProductSearchOptions,
): Promise<PaginatedResult<Product>> {
  const page = options.page ?? 1;
  const limit = options.limit ?? 48;
  const offset = (page - 1) * limit;

  const [brandId, categoryId] = await Promise.all([
    resolveNameFilter(Brand, options.brand),
    resolveNameFilter(Category, options.category),
  ]);
  const where = buildWhere(options, brandId, categoryId);

  if (options.q) {
    // Filtering on a belongsTo association's column via "$brand.name$"
    // doesn't compose safely with Sequelize's default auto-subquery
    // pagination, and disabling it (subQuery: false) would reintroduce
    // row-multiplication if the images hasMany were included here too. So
    // this path fetches the correct paginated id set without images first,
    // then hydrates just that page with full includes below.
    const { count, rows } = await Product.findAndCountAll({
      where: {
        ...where,
        [Op.or]: [
          { title: { [Op.like]: `%${options.q}%` } },
          { "$brand.name$": { [Op.like]: `%${options.q}%` } },
          { "$category.name$": { [Op.like]: `%${options.q}%` } },
        ],
      },
      include: [
        { model: Brand, as: "brand", attributes: [], required: false },
        { model: Category, as: "category", attributes: [], required: false },
      ],
      subQuery: false,
      distinct: true,
      limit,
      offset,
      order: [["id", "ASC"]],
    });
    const data = await hydrateByIds(rows.map((r) => r.id));
    return { data, total: count, page, limit };
  }

  // No free-text filter: a plain findAndCountAll with the images hasMany
  // included is safe here — Sequelize's default subQuery:true (triggered
  // automatically by limit + a hasMany include) paginates product ids
  // before joining images, which is exactly what the old hand-written
  // "fetch ids, then hydrate" pagination code did manually.
  const { count, rows } = await Product.findAndCountAll({
    where,
    include: includeAll,
    distinct: true,
    limit,
    offset,
    order: [["id", "ASC"]],
  });
  return { data: rows, total: count, page, limit };
}

export function getProductById(id: number): Promise<Product | null> {
  return Product.findByPk(id, { include: includeAll });
}

export async function createProduct(
  data: ProductCreateInput,
): Promise<Product> {
  const product = await Product.create({
    title: data.title,
    description: data.description,
    gender: data.gender,
    price: data.price,
    prevPrice: data.prevPrice ?? null,
    categoryId: data.categoryId ?? null,
    brandId: data.brandId ?? null,
  });

  if (data.images.length) {
    await ProductImage.bulkCreate(
      data.images.map((url) => ({ url, productId: product.id })),
    );
  }

  return (await getProductById(product.id))!;
}

export async function updateProduct(
  id: number,
  data: ProductUpdateInput,
): Promise<Product | null> {
  const product = await Product.findByPk(id);
  if (!product) return null;

  const { images, ...fields } = data;
  await product.update(fields);

  // Images have no identity beyond "belongs to this product + a URL", so a
  // full replace is simpler and safer than diffing old vs. new URLs.
  if (images !== undefined) {
    await ProductImage.destroy({ where: { productId: id } });
    if (images.length) {
      await ProductImage.bulkCreate(
        images.map((url) => ({ url, productId: id })),
      );
    }
  }

  return getProductById(id);
}

export async function deleteProduct(id: number): Promise<boolean> {
  const deleted = await Product.destroy({ where: { id } });
  return deleted > 0;
}
