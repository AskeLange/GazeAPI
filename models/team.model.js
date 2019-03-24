

// Imports
const mongoose = require ('mongoose');

// The Role Schema, tmp. excluded
let RoleSchema = new mongoose.Schema ({

  label: { type: String, required: true },
  access: { type: [String] }

}); 

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