const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/list_items', async (req, res) => {
  const list_items = await db.any("SELECT * FROM list_items;");
  res.json(list_items);
});

router.get('/list_items/:id', async (req, res) => {
  const list_items = await db.any("SELECT * FROM list_items WHERE item_id = $1;", [req.params.id]);
  res.json(list_items);
});

router.post('/list_items', async (req, res) => {
  if(!req.body) {
    res.json({error: 'Could not save'});
  } else {
    const {name, description, quantity} = req.body;
    console.log(name, description, quantity);

    const ins_query = await db.none("INSERT INTO list_items(name, description, quantity) VALUES($1, $2, $3)", [name, description, quantity]);
    
    // add proper error handling
    res.json({success: 'true'});
  }
});

router.patch('/list_items/:id', async (req, res) => {
  res.json({todo: 'todo edit'});
});

router.delete('/list_items/:id', async (req, res) => {
  res.json({todo: 'todo delete'});
});

module.exports = router;