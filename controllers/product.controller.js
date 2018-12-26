

// Imports
const Product = require ('../models/product.model');

// Create Product
exports.insert_product = ((req,res) => {

  // Creates the document
  let b = req.body;
  let document = new Product ({
    label: b.label,
    team: b.team,
    stories: [],
    sprints: []
  });

  // Saves the document
  document.save ((err, r) => {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});
 
// Get Product
exports.get_product = ((req,res) => {
  Product.findOne ({ _id: req.params.id }, (err, r) => {
    if (err) { res.status (500); res.send (err); return; } 
    res.send (r);
  });
});

// Update Product
exports.update_product = ((req,res) => {

  // Accepts n' formats data
  let r = req.body, setters = { };
  if (r.label) setters.label = r.label;
  if (r.stories) setters.stories = JSON.parse (r.stories);
  if (r.sprints) setters.sprints = JSON.parse (r.sprints);

  // Does the actual updating
  Product.findOneAndUpdate ({ _id: req.params.id }, { $set: setters }, (err,r) =>  {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});

// Delete Product
exports.delete_product = ((req,res) => {
  Product.findOneAndDelete ({ _id: req.params.id }, (err, r) => {
    if (err) { res.status (500); res.send (err); return; } 
    res.send (r);
  });
});