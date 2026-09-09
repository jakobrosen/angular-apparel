import type { Request, Response, Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AdminUser } from "../models/index.js";
import { validate } from "../utilities/validate.js";
import { HttpError } from "../utilities/httpError.js";
import { loginSchema } from "../types/validators.js";
import { JWT_SECRET } from "../config/variables.js";

async function login(req: Request, res: Response): Promise<void> {
  const data = validate(loginSchema, req.body);

  const user = await AdminUser.findOne({ where: { username: data.username } });
  // One message for both "no such user" and "wrong password" - saying which
  // would tell an attacker whether a username exists.
  if (!user || !bcrypt.compareSync(data.password, user.passwordHash)) {
    throw new HttpError(401, "Invalid credentials");
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "24h" });
  res.json({ token });
}

export function registerAdminRoutes(app: Router) {
  app.post("/api/admin/auth/login", login);
}
