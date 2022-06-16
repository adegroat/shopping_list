const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/list_items', async (req, res) => {
  try {
    const list_items = await db.any("SELECT * FROM list_items ORDER BY name;");
    res.json(list_items);
  } catch(e) {
    res.json({error: 'Failed to get items'});
  }

});

router.get('/list_items/:id', async (req, res) => {
  try {
    const item = await db.any("SELECT * FROM list_items WHERE item_id = $1;", [req.params.id]);
    res.json(item);
  } catch(e) {
    res.json({error: 'Failed to find item'});
  }
});

router.post('/list_items', async (req, res) => {
  if(!req.body) {
    res.json({error: 'Could not save'});
  } else {
    const {name, description, quantity} = req.body;

    try {
      const ins_query = await db.none("INSERT INTO list_items(name, description, quantity) VALUES($1, $2, $3)", [name, description, quantity]);
      res.json({status: 'success'});
    } catch(e) {
      res.json({error: 'Failed to add item'});
    }
  }
});

router.patch('/list_items/:id', async (req, res) => {
  if(!req.body || !req.params.id) {
    res.json({error: 'Could not update'});
  } else {
    const {name, description, quantity, purchased} = req.body;

    try {
      const update = await db.none("UPDATE list_items SET name=$1, description=$2, quantity=$3, purchased=$4 WHERE item_id=$5", [name, description, quantity, purchased, req.params.id]);
      res.json({status: 'success'});
    } catch(e) {
      res.json({error: 'Failed to update item'});
    }
    
  }
});

router.delete('/list_items/:id', async (req, res) => {
  if(!req.params.id) {
    res.json({error: 'Could not delete'});
  } else {
    try {
      const del = await db.none("DELETE FROM list_items WHERE item_id=$1", [req.params.id]);
      res.json({status: 'success'});
    } catch(e) {
      res.json({error: 'Failed to delete item'});
    }
  }
});

module.exports = router;