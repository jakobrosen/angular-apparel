import type { Attributes, FindOptions, Model, ModelStatic } from "sequelize";
import { HttpError } from "./httpError.js";

/**
 * Looks up one row by primary key, throwing a 404 HttpError instead of
 * returning null when there's no such row. Callers get a non-nullable model
 * back, so the same "if (!found) respond 404" block isn't repeated in every
 * route that fetches something by id.
 *
 * `label` names the thing in the message, e.g. "Product" -> "Product not found".
 * `options` is passed through to `findByPk`, which is how the product routes
 * ask for their category/brand/images to be included.
 */
export async function findOrFail<M extends Model>(
  model: ModelStatic<M>,
  id: number,
  label: string,
  options: Omit<FindOptions<Attributes<M>>, "where"> = {},
): Promise<M> {
  const found = await model.findByPk(id, options);
  if (!found) throw new HttpError(404, `${label} not found`);
  return found;
}
