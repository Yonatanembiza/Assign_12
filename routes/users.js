const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET request for /users');
});

router.post('/', (req, res) => {
  const user = req.body;
  // Process the user data
  res.send('POST request for /users');
});

module.exports = router;
