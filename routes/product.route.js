

// Imports
const express = require ('express');
const product_controller = require ('../controllers/product.controller');

// Fields
const router = express.Router ();

// Route registration
// Main routes
router.post ('/insert', product_controller.insert_product);
router.get ('/:id', product_controller.get_product);
router.delete ('/:id', product_controller.delete_product);

router.post ('/:id/sprints/insert', product_controller.insert_sprint );
router.get ('/:id/sprints', );
router.get ('/:id/sprints/:id', );
router.delete ('/:id/sprints/:id', );

// Exports
module.exports = router;