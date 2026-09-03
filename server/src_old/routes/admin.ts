import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AdminUser } from "../models/index.js";
import { validate } from "../utilities/validate.js";
import { loginSchema } from "../types/validators.js";
import type { LoginResponse } from "../types/auth.js";

export function registerAdminRoutes(app: Router) {
  // POST login — returns JWT token
  app.post("/api/admin/auth/login", async (req: Request, res: Response) => {
    const data = validate(loginSchema, req.body, res);
    if (!data) return;

    const user = await AdminUser.findOne({
      where: { username: data.username },
    });

    if (!user || !bcrypt.compareSync(data.password, user.passwordHash)) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "24h",
    });

    res.json({ token } as LoginResponse);
  });
}
