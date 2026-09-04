import dotenv from "dotenv";

// quiet: true - suppresses dotenv's own stdout logging, including its
// randomly-picked promotional "tips" (some of which advertise unrelated
// third-party products - not something this server's logs should carry).
dotenv.config({ quiet: true });

/**
 * Reads a required env var, throwing immediately if it's missing. Anything
 * that imports these constants makes the server fail fast at startup on bad
 * config, instead of failing confusingly on the first request that needs it.
 */
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export const JWT_SECRET = requireEnv("JWT_SECRET");
export const PORT = Number(process.env["PORT"] ?? 8000);
