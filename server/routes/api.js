const express = require('express');
const router = express.Router();

router.get('/shopping_list', (req, res) => {
  res.json([])
});

module.exports = router;