

// Imports
const express = require ('express');
const sprint_controller = require ('../controllers/sprint.controller');

// Fields
const router = express.Router ();

// Route registration
// Main routes
router.post ('/', sprint_controller.insert_sprint);
router.get ('/:id', sprint_controller.get_sprint);
router.patch ('/:id', sprint_controller.update_sprint);
router.delete ('/:id', sprint_controller.delete_sprint);

// Exports
module.exports = router;