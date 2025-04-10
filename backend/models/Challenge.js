// models/Challenge.js
const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    user: { type: String, required: true },
    challengeText: { type: String, required: true },
}, { timestamps: true });

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
