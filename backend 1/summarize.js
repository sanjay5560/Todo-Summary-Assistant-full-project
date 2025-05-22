const express = require('express');
const router = express.Router();
const { supabase } = require('../db');
const { generateSummary } = require('../services/openai');
const { sendToSlack } = require('../services/slack');

router.post('/', async (req, res) => {
  try {
    const { data: todos } = await supabase.from('todos').select('*').eq('completed', false);
    const summary = await generateSummary(todos);
    await sendToSlack(summary);
    res.json({ message: 'Summary sent to Slack' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to summarize or send to Slack' });
  }
});

module.exports = router;
