import {
  DataTypes,
  Model,
  type CreationOptional,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "./sequelize.js";

export class Brand extends Model<
  InferAttributes<Brand>,
  InferCreationAttributes<Brand>
> {
  declare id: CreationOptional<number>;
  declare name: string;
}

Brand.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
  },
  { sequelize, modelName: "Brand", tableName: "brands" },
);
