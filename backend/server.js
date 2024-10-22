const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const product = require('./models/Product');
// middleware
app.use(cors());
app.use(express.json());



// router to get all products in database
app.get('/product', async (req, res) => {
    try {
        const data = await product.find();
        res.status(200).json(data);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ error: "Internal server error" })
    }
})

// router to add product in database
app.post('/product', async (req, res) => {
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
})


// router to update product in database
app.put('/product/:id', async (req, res) => {
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
})


// router to delete product in database
app.delete('/product/:id', async (req, res) => {
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
})



// connecting to mongodb database
const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected`);

    } catch (error) {
        console.log("Error: ", error);
        process.exit(1);

    }
}

connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening on PORT: ${PORT}`);
    })
}).catch((err) => {
    console.log("Error: ", err);
})