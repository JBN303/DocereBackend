const mongoose = require('mongoose');

const puserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add other patient-specific fields as needed
});

const PUser = mongoose.model('PUser', puserSchema);

module.exports = PUser;