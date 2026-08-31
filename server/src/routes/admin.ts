import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/db.js";
import type { LoginRequest, LoginResponse } from "../types/auth.js";

export function registerAdminRoutes(app: Router) {
  // POST login — returns JWT token
  app.post("/api/admin/auth/login", (req: Request, res: Response) => {
    const { username, password }: LoginRequest = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "username and password are required" });
    }

    const user = db
      .prepare("SELECT * FROM admin_users WHERE username = ?")
      .get(username) as { id: number; password_hash: string } | undefined;

    if (!user || !bcrypt.compareSync(password, user.password_hash)) {
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
