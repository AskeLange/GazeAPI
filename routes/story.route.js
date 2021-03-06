

// Imports
const express = require ('express');
const story_controller = require ('../controllers/story.controller');

// Fields
const router = express.Router ();

// Route registration
// Main routes
router.post ('/', story_controller.insert_story);
router.get ('/:id', story_controller.get_story);
router.patch ('/:id', story_controller.update_story);
router.delete ('/:id', story_controller.delete_story);

// Exports
module.exports = router;