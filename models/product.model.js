

// Imports
const mongoose = require ('mongoose');

// The Product Schema
let ProductSchema = new mongoose.Schema ({

  // Product Info
  label: { type: String, required: true },
  team: { type: String, required: true },
  stories: { type: [String] },

  // Sprints
  sprints: [{

    label: { type: String },
    start: { type: Date },
    end: { type: Date },
    stories: { type: [String] }

  }]

});

// Exports
module.exports = mongoose.model (
  'product', ProductSchema
);