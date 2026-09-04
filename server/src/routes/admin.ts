import type { Request, Response, Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AdminUser } from "../models/index.js";
import { validate } from "../utilities/validate.js";
import { loginSchema } from "../types/validators.js";
import { JWT_SECRET } from "../config/variables.js";

async function login(req: Request, res: Response): Promise<void> {
  const data = validate(loginSchema, req.body, res);
  if (!data) return;

  const user = await AdminUser.findOne({ where: { username: data.username } });
  if (!user || !bcrypt.compareSync(data.password, user.passwordHash)) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "24h" });
  res.json({ token });
}

export function registerAdminRoutes(app: Router) {
  app.post("/api/admin/auth/login", login);
}
