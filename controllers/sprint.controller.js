

// Imports
const Sprint = require ('../models/sprint.model');

// Create Sprint
exports.insert_sprint = ((req,res) => {

  // Creates the document
  let b = req.body;
  let document = new Sprint ({

    label: b.label,
    start_date: b.start_date ? new Date(b.start_date) : null, 
    end_date: b.end_date ? new Date(b.end_date) : null, 
    stories: [ ]

  });

  // Saves the document
  document.save ((err, r) => {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});
 
// Get Sprint
exports.get_sprint = ((req,res) => {
  Sprint.findOne ({ _id: req.params.id }, (err, r) => {
    if (err) { res.status (500); res.send (err); return; } 
    res.send (r);
  });
});

// Update Sprint
exports.update_sprint = ((req,res) => {

  // Accepts n' formats data
  let r = req.body, setters = { };
  if (r.label) setters.label = r.label;
  if (r.start_date) setters.start_date = new Date(setters.start_date);
  if (r.end_date) setters.end_date = new Date(setters.end_date);
  if (r.stories) setters.stories = JSON.parse (r.stories);

  // Does the actual updating
  Sprint.findOneAndUpdate ({ _id: req.params.id }, { $set: setters }, (err,r) =>  {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});

// Delete Sprint
exports.delete_sprint = ((req,res) => {
  Sprint.findOneAndDelete ({ _id: req.params.id }, (err, r) => {
    if (err) { res.status (500); res.send (err); return; } 
    res.send (r);
  });
});