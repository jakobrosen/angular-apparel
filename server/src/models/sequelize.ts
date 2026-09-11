import { Sequelize } from "sequelize";
import path from "path";

// Skapar en relativ sökväg till databasfilen.
const dbPath = path.join(process.cwd(), "src", "config", "database.db");

// Skapar en ny instans av sequelize
export const sequelize = new Sequelize({
  dialect: "sqlite", // Definierar att vi använder sqlite
  storage: dbPath, // Pekar på databasfilen
  logging: false, // Stänger av console logging
  // "define" = default options som appliceras på alla models
  define: {
    timestamps: true, // Aktiverar createdAt och updatedAt
  },
});
