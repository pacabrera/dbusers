// Initialization
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
    password: {
    type: String,
    required: true
  }

});


// Export ideas model
module.exports = mongoose.model('users', UsersSchema);

