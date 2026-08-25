import express from 'express';

// Creates an express application
const app = express();

// Defaults to port 8000 if no environment varible is available
const port = process.env.PORT || 8000;

// GET-endpoint
app.get('api/products', (req, res) => {
  res.json(
    { id: 1, title: 'placeholder' }
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});