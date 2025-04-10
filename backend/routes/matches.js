const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Match = require('../models/Match');

// Route to get all ongoing matches
router.get('/ongoing-matches', async (req, res) => {
  try {
    console.log('Fetching ongoing matches...');

    const matches = await Match.find();
    console.log('Matches from DB:', matches); // Check what's returned from the DB

    if (matches.length === 0) {
      console.log('No matches found');
    } else {
      console.log('Matches found:', matches.length);
    }

    res.json(matches);
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;