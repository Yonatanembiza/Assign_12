const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
const usersRouter = require('./routes/users.js');
const productsRouter = require('./routes/products.js');

app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Optional: Practice middleware and routing
app.use((req, res, next) => {
  console.log('This middleware runs for all routes.');
  next();
});

// Optional: Practice 404 page customization
app.use((req, res, next) => {
  res.status(404).send('Custom 404 Page Not Found');
});

// Optional: Practice error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
