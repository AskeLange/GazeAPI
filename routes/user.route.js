

// Imports
const express = require ('express');
const user_controller = require ('../controllers/user.controller');

// Fields
const router = express.Router ();

// Route registration
// Main routes
router.post ('/', user_controller.insert_user);
router.get ('/token', user_controller.fetch_token);
router.get ('/:id', user_controller.get_user);
router.delete ('/:id', user_controller.delete_user);

// Exports
module.exports = router;