const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET request for /products');
});

router.post('/', (req, res) => {
  const product = req.body;
  // Process the product data
  res.send('POST request for /products');
});

module.exports = router;
