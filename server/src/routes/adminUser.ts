import type { Request, Response, Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AdminUser } from "../models/index.js";
import { HttpError } from "../middleware/errorHandler.js";
import { JWT_SECRET } from "../config/variables.js";
import { loginSchema } from "../types/schemas.js";
import { validate } from "../utilities/validation.js";

async function adminLogin(req: Request, res: Response): Promise<void> {
  const data = validate(loginSchema, req.body);

  // Letar efter användaren via dess användarnamn.
  const user = await AdminUser.findOne({ where: { username: data.username } });

  // Om användaren inte finns, eller om lösenordet inte matchar,
  // kasta ett fel.
  if (!user || !bcrypt.compareSync(data.password, user.passwordHash)) {
    throw new HttpError(401, "Invalid credentials");
  }

  // Signar ett nytt JSON web token som skickas tillbaka till klienten.
  // Detta token används sedan som autentisering för de endpoints som
  // kräver admin access. Giltigt i 24 timmar.
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "24h" });
  res.json({ token });
}

export function registerAdminRoutes(app: Router) {
  app.post("/api/admin/auth/login", adminLogin);
}
