import { PORT } from "./config/variables.js";
import express from "express";
import rateLimit from "express-rate-limit";
import { sequelize } from "./models/index.js";
import { registerBrandRoutes } from "./routes/brands.js";
import { registerCategoryRoutes } from "./routes/categories.js";
import { registerProductRoutes } from "./routes/products.js";
import { errorHandler } from "./middleware/errorHandler.js";

// Skapar en ny expressapplikation
const app = express();

// Middleware för att kunna parsa JSON.
// Limit på 1mb per request för att
// motverka DDOS eller liknande.
app.use(express.json({ limit: "1mb" }));

// Basic middleware som hanterar rate limit.
// Inställd på att tillåta 300 requests var tionde minut.
app.use(
  rateLimit({
    windowMs: 60000, // 10 minuters minne
    limit: 300, // 300 requests
    standardHeaders: true, // Aktiverar stöd för nya headers
    legacyHeaders: false, // Avaktiverar stöd för gamla headers
  }),
);

// Registrerar routes.
registerBrandRoutes(app);
registerCategoryRoutes(app);
registerProductRoutes(app);

// Fallback-route.
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Registrerar min egna error handler.
app.use(errorHandler);

// Syncar alla models till databasen, och startar servern.
async function start(): Promise<void> {
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Kastar ett fel om något misslyckas vid start av servern.
start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
