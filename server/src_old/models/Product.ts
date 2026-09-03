import {
  DataTypes,
  Model,
  type CreationOptional,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "./sequelize.js";
import { genderEnum, type Gender } from "../types/validators.js";

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
  declare discount: CreationOptional<boolean>;
}

Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    gender: {
      type: DataTypes.ENUM(...genderEnum.options),
      allowNull: false,
      defaultValue: "Unisex",
    },
    price: {
      // FLOAT, not DECIMAL — Sequelize's DECIMAL over the sqlite3 driver can
      // round-trip as a string rather than a number.
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
    discount: {
      type: DataTypes.VIRTUAL,
      get(this: Product) {
        const prevPrice = this.getDataValue("prevPrice");
        return prevPrice != null && prevPrice > this.getDataValue("price");
      },
    },
  },
  { sequelize, modelName: "Product", tableName: "products" },
);
