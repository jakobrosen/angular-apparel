// *** DATABASE SETUP ***

import Database from "better-sqlite3";
import fs from "fs";
import path from "path";

// Creates absolute file paths for database.db and schema.sql.
// This ensures the paths are always correct no matter which
// CWD the server is launched from.
const dbPath = path.join(import.meta.dirname, "database.db");
const schemaPath = path.join(import.meta.dirname, "schema.sql");

// Opens the SQLite database, and creates database.db if it doesn't exist
const db: Database.Database = new Database(dbPath);

// Enables foreign keys so that products can be related to brand/categories
db.pragma("foreign_keys = ON");

// Executes schema.sql against the database, which creates tables if they
// don't already exist
db.exec(fs.readFileSync(schemaPath, "utf8"));

export default db;
