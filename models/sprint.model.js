

// Imports
const mongoose = require ('mongoose');

// The Sprint Schema
let SprintSchema = new mongoose.Schema ({

  label: { type: String, required: true },
  start_date: { type: Date },
  end_date: { type: Date },
  stories: { type: [String] }

});

// Exports
module.exports = mongoose.model (
  'sprint', SprintSchema
);