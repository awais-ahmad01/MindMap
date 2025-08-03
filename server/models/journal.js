const mongoose = require('mongoose');
const User = require('./user'); // Assuming User model is in the same directory

const journalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  moodLabel: {
    type: String,
    default: ''
  },
  sentimentScore: {
    type: Number,
    default: null,
    min: 0,
    max: 10
  },
  moodEmoji: {
    type: String,
    default: ''
  },
  aiSuggestions: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
