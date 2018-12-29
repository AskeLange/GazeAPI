

// Imports
const Team = require ('../models/team.model');

// Create Team
exports.insert_team = ((req,res) => {

  // Creates the document
  let b = req.body;
  let document = new Product ({
    label : b.label,
    users : JSON.parse (b.users),
    products : []
  });

  // Saves the document
  document.save ((err, r) => {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});
 
// Get Team
exports.get_team = ((req,res) => {
  Team.findOne ({ _id: req.params.id }, (err, r) => {
    if (err) { res.status (500); res.send (err); return; } 
    res.send (r);
  });
});

// Update Team
exports.update_team = ((req,res) => {

  // Accepts n' formats data
  let r = req.body, setters = { };
  if (r.label) setters.label = r.label;
  if (r.users) setters.users = JSON.parse (r.users);
  if (r.products) setters.products = JSON.parse (r.products);

  // Does the actual updating
  Team.findOneAndUpdate ({ _id: req.params.id }, { $set: setters }, (err,r) =>  {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});

// Delete Team
exports.delete_team = ((req,res) => {
  Team.findOneAndDelete ({ _id: req.params.id }, (err, r) => {
    if (err) { res.status (500); res.send (err); return; } 
    res.send (r);
  });
});