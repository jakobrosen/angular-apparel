import { Sequelize } from "sequelize";
import path from "path";

// Absolute path so the server behaves the same regardless of which
// directory it's launched from.
const dbPath = path.join(import.meta.dirname, "..", "config", "database.db");

// Sequelize database connection object.
export const sequelize = new Sequelize({
  dialect: "sqlite", // Defines that we are using SQLITE.
  storage: dbPath, // Path to the database file.
  logging: false, // Turns off console logging of SQL queries.
  define: {
    // Defaults applied to every model defined using this connection.
    underscored: true, // Translates camelCase to snake_case for the db.
    timestamps: true, // Enables timestamps for each model
  },
});
