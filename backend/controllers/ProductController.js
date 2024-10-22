const product = require('../models/Product');
const mongoose = require('mongoose');

const getProduct = async (req, res) => {
    try {
        const data = await product.find();
        res.status(200).json(data);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Internal server error" })
    }
}

const addProduct = async (req, res) => {
    try {
        const newProductData = req.body;

        // Create a new instance of the Product model
        const newProduct = new product(newProductData);

        // Save the new product to the database
        const savedProduct = await newProduct.save();

        // Respond with the saved product and a 201 status code
        res.status(200).json(savedProduct);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ Error: "Internal server error" })
    }
}


const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const productData = req.body;
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ Error: "Invalid product ID" });
        }
        const updatedProduct = await product.findByIdAndUpdate(productId, productData, {
            new: true,
            runValidators: true
        })
        if (!updatedProduct) {
            res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ Error: "Internal server error" })
    }
}


const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ Error: "Invalid product ID" });
        }
        const deletedProduct = await product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            res.status(404).json({ error: "Product not found" })
        }
        res.status(200).json({ message: "product deleted" })
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Internal server error" })
    }
}

module.exports = { getProduct, addProduct, updateProduct, deleteProduct };