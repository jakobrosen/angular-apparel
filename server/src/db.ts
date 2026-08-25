// better-sqlite3 is used 
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'database.db');
const schemaPath = path.join(__dirname, 'schema.sql');

const db: Database.Database = new Database(dbPath);
db.pragma('foreign_keys = ON');

const schema: string = fs.readFileSync(schemaPath, 'utf8');
db.exec(schema);

export default db;