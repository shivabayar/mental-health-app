const express = require('express');
const router = express.Router();
const { createLog, getLogsByUser } = require('../models/logModel');

// POST /log - Submit daily logs
router.post('/log', (req, res) => {
  const log = req.body;
  createLog(log, (err, logId) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'Log created successfully', logId });
  });
});

// GET /logs - Retrieve logs for a user
router.get('/logs/:userId', (req, res) => {
  const userId = req.params.userId;
  getLogsByUser(userId, (err, logs) => {
    if (err) return res.status(500).send(err);
    res.json(logs);
  });
});

module.exports = router;
