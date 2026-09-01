import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";
import { loginSchema } from "../types/validators.js";
import type { LoginResponse } from "../types/auth.js";

export function registerAdminRoutes(app: Router) {
  // POST login — returns JWT token
  app.post("/api/admin/auth/login", (req: Request, res: Response) => {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors });

    const user = db
      .prepare("SELECT * FROM admin_users WHERE username = ?")
      .get(parsed.data.username) as { id: number; password_hash: string } | undefined;

    if (!user || !bcrypt.compareSync(parsed.data.password, user.password_hash)) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET!,
      { expiresIn: "24h" },
    );

    res.json({ token } as LoginResponse);
  });
}
