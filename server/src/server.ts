import express from "express";
import { registerProductsRoutes } from "./routes/products.js";
import { registerBrandsRoutes } from "./routes/brands.js";
import { registerCategoriesRoutes } from "./routes/categories.js";

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Register routes
registerProductsRoutes(app);
registerBrandsRoutes(app);
registerCategoriesRoutes(app);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
