import express from 'express';

// Imports database from db.ts
import db from './db.js';

// Creates an express application
const app = express();

// Defaults to port 8000 if no environment varible is available
const port = process.env.PORT || 8000;

// GET-endpoint
app.get('/api/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});