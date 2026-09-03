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
export class AdminUser extends Model<
  InferAttributes<AdminUser>,
  InferCreationAttributes<AdminUser>
> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare passwordHash: string;
}

// Initializes the model.
AdminUser.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "AdminUser",
    tableName: "admin_users",
    timestamps: false,
  },
);
