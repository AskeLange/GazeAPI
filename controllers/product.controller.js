

// Imports
const Product = require ('../models/product.model');

// #region Product

// Create Product
exports.insert_product = ((req,res) => {

  // Creates the document
  let document = new Product ({
    label: req.body.label,
    team: req.body.team,
    stories: [],
    sprints: []
  });

  // Saves the document
  document.save (err => {
    if (err) { res.status (500); res.send (err); }
    res.send ('Product "'+req.body.label+'" were successfully created');
  });

});
 
// Get Product
exports.get_product = ((req,res) => {
  Product.findById (req.params.id, (err, response) => {
    if (err) { res.status (500); res.send (err); }
    res.send (response); 
  });
});

// Delete Product
exports.delete_product = ((req,res) => {
  Product.findById (req.params.id) .remove() .then ((err) => {
    if (err) { res.status (500); res.send (err); }
    res.send ('Product '+req.params.id+' were successfully deleted');
  });
});

// Update Product
exports.update_product = ((req,res) => {
  Product.findByIdAndUpdate (req.params.id, { $set: req.body }, (err) => {
    if (err) { res.status (500); res.send (err); }
    res.send ('Product '+req.params.id+' were successfully updated');
  });
});

// #endregion

// #region Sprint

exports.insert_sprint = ((req,res) => {
  Product.findByIdAndUpdate (req.params.id, {  }, (err,resp) => {
    if (err) { res.status (500); res.send (err); }
    res.send (resp);
  });
});

// #endregion