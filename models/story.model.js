

// Imports
const mongoose = require ('mongoose');

// The Product Schema
let StorySchema = new mongoose.Schema ({

  label: { type: String, required: true },
  description: { type: String },
  priority: { type: Number },
  user_role: { type: String },
  user_desire: { type: String },
  user_rationale: { type: String }

});

// Exports
module.exports = mongoose.model (
  'story', StorySchema
);