const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/list_items', async (req, res) => {
  const list_items = await db.any("SELECT * FROM list_items;");
  res.json(list_items);
});

module.exports = router;