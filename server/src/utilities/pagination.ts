import type {
  Attributes,
  FindAndCountOptions,
  Model,
  ModelStatic,
} from "sequelize";

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

/**
 * Runs `model.findAndCountAll`, translating `{page, limit}` into the
 * `limit`/`offset` pair Sequelize wants, and reshaping the result into the
 * `{data, total, page, limit}` envelope every paginated list route returns.
 *
 * `distinct: true` is always applied: without it, a `findAndCountAll` that
 * includes a hasMany association (e.g. a product's images) inflates `count`
 * to one per joined row instead of one per product.
 */
export async function paginate<M extends Model>(
  model: ModelStatic<M>,
  { page, limit }: PaginationParams,
  options: Omit<
    FindAndCountOptions<Attributes<M>>,
    "limit" | "offset" | "distinct" | "group"
  > = {},
): Promise<PaginatedResult<M>> {
  const { count, rows } = await model.findAndCountAll({
    ...options,
    limit,
    offset: (page - 1) * limit,
    distinct: true,
  });
  return { data: rows, total: count, page, limit };
}
