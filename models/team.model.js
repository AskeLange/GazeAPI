

// Imports
const mongoose = require ('mongoose');

// The Product Schema
let TeamSchema = new mongoose.Schema ({

  label: { type: String, required: true },
  users: { type: [String], required: true },
  products: { type: [String] }

});

// Exports
module.exports = mongoose.model (
  'team', TeamSchema
);