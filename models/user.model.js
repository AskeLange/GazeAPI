

// Imports
const mongoose = require ('mongoose');

// The Product Schema
let UserSchema = new mongoose.Schema ({

  username: { type: String, required: true },
  password: { type: String, required: true }, // <- change this, rn
  mail: { type: String, required: true },
  teams: { type: [String] }

});

// Exports
module.exports = mongoose.model (
  'user', UserSchema
);