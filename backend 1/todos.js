const express = require('express');
const router = express.Router();
const { supabase } = require('../db');

// GET /todos
router.get('/', async (req, res) => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// POST /todos
router.post('/', async (req, res) => {
  const { task } = req.body;
  const { data, error } = await supabase.from('todos').insert([{ task, completed: false }]).select();
  if (error) return res.status(500).json({ error });
  res.json(data[0]);
});

// DELETE /todos/:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from('todos').delete().eq('id', id);
  if (error) return res.status(500).json({ error });
  res.json({ message: 'Todo deleted' });
});

module.exports = router;
