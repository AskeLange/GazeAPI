

// Imports
const express = require ('express');
const product_controller = require ('../controllers/product.controller');

// Fields
const router = express.Router ();

// Route registration
// Main routes
router.post ('/', product_controller.insert_product);
router.get ('/:id', product_controller.get_product);
router.put ('/:id', product_controller.update_product);
router.delete ('/:id', product_controller.delete_product);

// Exports
module.exports = router;