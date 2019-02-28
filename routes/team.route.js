

// Imports
const express = require ('express');
const team_controller = require ('../controllers/team.controller');

// Fields
const router = express.Router ();

// Route registration
// Main routes
router.post ('/', team_controller.insert_team);
router.get ('/:id', team_controller.get_team);
router.patch ('/:id', team_controller.update_team)
router.delete ('/:id', team_controller.delete_team);

// Exports
module.exports = router;