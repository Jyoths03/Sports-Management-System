// routes/challenges.js
const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge');

// Submit a new challenge
router.post('/', async (req, res) => {
    const { user, challengeText } = req.body;

    const newChallenge = new Challenge({ user, challengeText });
    
    try {
        await newChallenge.save();
        res.status(201).json({ message: 'Challenge submitted successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Error submitting challenge', error: err.message });
    }
});

// Get all challenges
router.get('/', async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.status(200).json(challenges);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching challenges', error: err.message });
    }
});

module.exports = router;
