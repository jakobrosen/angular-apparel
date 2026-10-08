import { PORT } from "./config/variables.js";
import express from "express";
import rateLimit from "express-rate-limit";
import { sequelize } from "./models/index.js";
import { registerBrandRoutes } from "./routes/brands.js";
import { registerCategoryRoutes } from "./routes/categories.js";
import { registerProductRoutes } from "./routes/products.js";
import { registerAdminRoutes } from "./routes/adminUser.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json({ limit: "1mb" }));

app.use(
  rateLimit({
    windowMs: 60000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

registerBrandRoutes(app);
registerCategoryRoutes(app);
registerProductRoutes(app);
registerAdminRoutes(app);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use(errorHandler);

async function start(): Promise<void> {
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
