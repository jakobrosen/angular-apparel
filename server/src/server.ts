import express from "express";
import rateLimit from "express-rate-limit";
import { sequelize } from "./models/index.js";
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

// Registrerar min egna error handler.
app.use(errorHandler);
