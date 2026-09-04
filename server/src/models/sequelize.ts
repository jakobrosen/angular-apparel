import { Sequelize } from "sequelize";
import path from "path";

// Resolved from the current working directory (every npm script in this
// project - dev, seed, build, watch - is documented to run from server/),
// NOT from import.meta.dirname. import.meta.dirname points at wherever the
// *executing* file lives, which differs between `tsx` running src/ directly
// and `node` running the compiled dist/ output - that mismatch previously
// pointed dev/seed and the built server at two different, disconnected
// database files.
const dbPath = path.join(process.cwd(), "config", "database.db");

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
