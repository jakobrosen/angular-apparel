import "./config/variables.js";
import express from "express";
import { registerProductsRoutes } from "./routes/products.js";
import { registerBrandsRoutes } from "./routes/brands.js";
import { registerCategoriesRoutes } from "./routes/categories.js";
import { registerAdminRoutes } from "./routes/admin.js";

const app = express();

// Parse JSON request bodies (limit to 1MB to prevent abuse)
app.use(express.json({ limit: "1mb" }));

// Register routes
registerProductsRoutes(app);
registerBrandsRoutes(app);
registerCategoriesRoutes(app);
registerAdminRoutes(app);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
