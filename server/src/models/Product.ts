import { sequelize } from "./sequelize.js";
import {
  Model,
  DataTypes,
  type CreationOptional,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";

/**
 * Skapar en sequelize-model genom att extenda klassen Model
 * som importeras från libraryt.
 */
export class Product extends Model<
  // InferAttributes bygger en typ automatiskt baserat på
  // vad som deklareras inom klassen med "declare".
  InferAttributes<Product>,
  // InferCreationAttributes ser till att de egenskaper som
  // markeras med CreationOptional blir optional vid vissa
  // databasoperationer, till exempel .create().
  InferCreationAttributes<Product>
> {
  // De egenskaper som faktiskt används i koden skapas under
  // runtime av sequelize genom .init(), men eftersom de inte
  // finns innan koden kompileras så kan vi använda declare
  // för att "lova" TypeScript att de kommer finnas i framtiden.
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare gender: string;
  declare price: number;
  declare prevPrice: number | null;
  declare categoryId: number | null;
  declare brandId: number | null;
}

// Initierar modellen.
Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    gender: {
      type: DataTypes.STRING,
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
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
  },
);
