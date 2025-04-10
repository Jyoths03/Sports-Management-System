const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  date: String,
  match: String,
  time: String,
  venue: String
});

const Match = mongoose.model('Match', matchSchema, 't20matches'); // Explicitly use 't20matches'

module.exports = Match;