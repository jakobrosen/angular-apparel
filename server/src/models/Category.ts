import { sequelize } from "./sequelize.js";
import {
  Model,
  DataTypes,
  type CreationOptional,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";
import type { CategoryType } from "../types/schemas.js";

export class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  // Delar upp kategorierna i kläder och accessoarer, vilket
  // används för att gruppera dem i hover-menyn på frontenden.
  declare type: CategoryType;
}

Category.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    type: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "categories",
  },
);
