

// Imports
const Story = require ('../models/story.model');

// Insert Story
exports.insert_story = ((req,res) => {

  // Creates the document
  let b = req.body;
  let document = new Story ({
  
    label: b.label,
    description: b.description != null ? b.description : '',
    priority: b.priority != null ? parseInt(b.priority) : 0,
    user_role: b.user_role != null ? b.user_role : '',
    user_desire: b.user_desire != null ? b.user_desire : '',
    user_rationale: b.user_rationale != null ? b.user_rationale : '',
  
  });

  // Saves the document
  document.save ((err,r) => {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});

// Get Story
exports.get_story = ((req,res) => {
  Story.findOne ({ _id: req.params.id}, (err,r) => {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  })
});

// Update Story
exports.update_story = ((req,res) => {

  // Accepts n' formats data
  let r = req.body, setters = { };
  if (r.label) setters.label = r.label;
  if (r.description) setters.description = r.description;
  if (r.priority) setters.priority = parseInt (r.priority);
  if (r.user_role) setters.user_role = r.user_role;
  if (r.user_desire) setters.user_desire = r.user_desire;
  if (r.user_rationale) setters.user_rationale = r.user_rationale;

  // Does the actual updating
  Story.findOneAndUpdate ({ _id: req.params.id }, { $set: setters }, (err,r) =>  {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });

});

// Delete Story
exports.delete_story = ((req,res) => {
  Story.findByIdAndDelete ({ _id: req.params.id }, (err,r) => {
    if (err) { res.status (500); res.send (err); return; }
    res.send (r);
  });
});