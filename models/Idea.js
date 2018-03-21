// Initialization
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IdeaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
    genre: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
    rating: {
    type: String,
        default: 'Not Yet Rated'
  },
    isWatched: {
    type: String,
    default: false
  }
});


// Export ideas model
module.exports = mongoose.model('ideas', IdeaSchema);

