import express from "express";
import rateLimit from "express-rate-limit";
import { sequelize } from "./models/index.js";
import { PORT } from "./config/variables.js";
import { registerProductsRoutes } from "./routes/products.js";
import { registerBrandsRoutes } from "./routes/brands.js";
import { registerCategoriesRoutes } from "./routes/categories.js";
import { registerAdminRoutes } from "./routes/admin.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Parse JSON request bodies (limit to 1MB to prevent abuse).
app.use(express.json({ limit: "1mb" }));

// Basic per-IP rate limit across the whole API. 300 requests / 15 min is
// generous for a shopper paging through products (well above anything
// normal browsing would hit) while still bounding scripted abuse. One
// global limit, not a per-route policy - simplest thing that satisfies the
// spec's "rate limiting, simplest way possible" ask.
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

registerProductsRoutes(app);
registerBrandsRoutes(app);
registerCategoriesRoutes(app);
registerAdminRoutes(app);

// Must be registered last - Express only treats a 4-arg function as error
// middleware, and only routes it errors from earlier in the chain.
app.use(errorHandler);

async function start(): Promise<void> {
  await sequelize.sync();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start();
