import dotenv from "dotenv";

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const JWT_SECRET = requireEnv("JWT_SECRET");
export const PORT = Number(process.env["PORT"] ?? 8000);
