import {
  DataTypes,
  Model,
  type CreationOptional,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "./sequelize.js";
import { genderEnum, type Gender } from "../types/validators.js";

// Creates a sequelize-model by extending the
// base Model-class.
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
  declare categoryId: number | null;
  declare brandId: number | null;
}

// Initializes the model.
Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    gender: {
      // DataTypes.ENUM is a variadic function (can accept
      // any amount of values) which is why the spread
      // operator works here.
      type: DataTypes.ENUM(...genderEnum.options),
      allowNull: false,
      defaultValue: "Unisex",
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
    categoryId: { type: DataTypes.INTEGER, allowNull: true },
    brandId: { type: DataTypes.INTEGER, allowNull: true },
  },

  { sequelize, modelName: "Product", tableName: "products" },
);
