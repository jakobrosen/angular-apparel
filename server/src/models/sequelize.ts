import { Sequelize } from "sequelize";
import path from "path";

// Skapar en relativ sökväg till databasfilen.
const dbPath = path.join(process.cwd(), "config", "database.db");

// Skapar en ny instans av sequelize
export const sequelize = new Sequelize({
  dialect: "sqlite", // Definierar att vi använder sqlite
  storage: dbPath, // Pekar på databasfilen
});
