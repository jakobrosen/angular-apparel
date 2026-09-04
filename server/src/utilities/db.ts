import { Op, type ModelStatic } from "sequelize";
import type { Brand } from "../models/Brand.js";
import type { Category } from "../models/Category.js";

/**
 * Case-insensitive exact match on a model's `name` column. SQLite's `LIKE`
 * is ASCII case-insensitive when the pattern has no wildcards, so this
 * doubles as an exact (not substring) match.
 */
export function findByNameCI(
  model: ModelStatic<Brand> | ModelStatic<Category>,
  name: string,
) {
  return model.findOne({ where: { name: { [Op.like]: name } } });
}
