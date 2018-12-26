

// Imports
const mongoose = require ('mongoose');

// The Product Schema
let ProductSchema = new mongoose.Schema ({

  // Product Info
  label: { type: String, required: true },
  team: { type: String, required: true },
  stories: { type: [String] },
  sprints: { type: [String] }

});

// Exports
module.exports = mongoose.model (
  'product', ProductSchema
);