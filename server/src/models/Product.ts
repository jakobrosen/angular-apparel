import { sequelize } from "./sequelize.js";
import {
  Model,
  DataTypes,
  type CreationOptional,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";
import type { Gender } from "../types/schemas.js";

export class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare gender: Gender;
  declare price: number;
  declare prevPrice: number | null;
  declare sku: string;
  declare categoryId: number | null;
  declare brandId: number | null;
  declare publishedAt: CreationOptional<Date>;
}

Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.TEXT, allowNull: false },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { min: 0 },
    },
    prevPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: { min: 0 },
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    categoryId: { type: DataTypes.INTEGER, allowNull: true },
    brandId: { type: DataTypes.INTEGER, allowNull: true },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
  },
);
