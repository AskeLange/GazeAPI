

// Imports
const Story = require ('../models/story.model');

// Insert Story
exports.insert_story = ((req,res) => {

  // Aliases
  let b = req.body;

  // Creates the document
  let document = new Story ({
  
    label: b.label,
    description: b.description != null ? b.description : '',
    priority: b.priority != null ? parseInt(b.priority) : 0,
    user_role: b.user_role != null ? b.user_role : '',
    user_desire: b.user_desire != null ? b.user_desire : '',
    user_rationale: b.user_rationale != null ? b.user_rationale : '',
  
  });

  // Saves the document
  document.save ((err) => {
    if (err) { res.status (500); res.send (err); }
    res.send ('Story "'+b.label+'" were successfully created');
  });

});

// Get Story
exports.get_story = ((req,res) => {
  Story.findById (req.params.id, (err,response) => {
    if (err) { res.status (500); res.send (err); }
    res.send (response);
  })
});

// Delete Story
exports.delete_story = ((req,res) => {
  Story.findById (req.params.id) .remove() .then ((err) => {
    if (err) { res.status (500); res.send (err); }
    res.send ('Story '+req.params.id+' were successfully deleted');
  });
});