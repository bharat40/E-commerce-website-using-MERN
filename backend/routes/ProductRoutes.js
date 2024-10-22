const express = require('express');
const router = express.Router();
// importing controllers
const { getProduct, addProduct, updateProduct, deleteProduct } = require('../controllers/ProductController');

// router to get all products in database
router.get('/', getProduct);

// router to add product in database
router.post('/', addProduct)


// router to update product in database
router.put('/:id', updateProduct)

// router to delete product in database
router.delete('/:id', deleteProduct)

module.exports = router;