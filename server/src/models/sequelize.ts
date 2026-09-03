import { Sequelize } from "sequelize";
import path from "path";

// Absolute path so the server behaves the same regardless of which
// directory it's launched from.
const storage = path.join(import.meta.dirname, "..", "config", "database.db");

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage,
  logging: false,
  define: {
    underscored: true,
    timestamps: true,
  },
});
