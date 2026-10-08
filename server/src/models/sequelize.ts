import { Sequelize } from "sequelize";
import path from "path";

const dbPath = path.join(process.cwd(), "src", "config", "database.db");

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: false,
  define: {
    timestamps: true,
  },
});
