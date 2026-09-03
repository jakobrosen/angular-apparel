import {
  DataTypes,
  Model,
  type CreationOptional,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "./sequelize.js";

// Creates a sequelize-model by extending the
// base Model-class.
export class ProductImage extends Model<
  InferAttributes<ProductImage>,
  InferCreationAttributes<ProductImage>
> {
  declare id: CreationOptional<number>;
  declare url: string;
  declare productId: number;
}

// Initializes the model.
ProductImage.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    url: { type: DataTypes.STRING, allowNull: false },
    productId: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "ProductImage",
    tableName: "product_images",
    // Images have no lifecycle of their own beyond belonging to a product,
    // so there's no need to track when a row was created/updated.
    timestamps: false,
  },
);
