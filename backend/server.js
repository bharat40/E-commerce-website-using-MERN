const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

// product schema
const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String,
    image: String,
    price: Number
})
// product model
const product = mongoose.model('product', productSchema);

// defining initial data for database
const products = [
    {
        name: "Men's Casual T-shirt",
        type: 'Men',
        description: 'Comfortable and stylish casual T-shirt for men',
        price: 350,
        image:
            'https://media.geeksforgeeks.org/wp-content/uploads/20230407153931/gfg-tshirts.jpg'
    },
    {
        name: 'Luxury bag',
        type: 'Not Applicable',
        description: 'Elegant luxury bag with leather strap',
        price: 2500,
        image:
            'https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg'
    },
    {
        name: "Hoodie",
        type: 'Men',
        description: 'Light and classy hoodies for every seasons ',
        price: 450,
        image:
            'https://media.geeksforgeeks.org/wp-content/uploads/20230407153938/gfg-hoodie.jpg'
    },
    {
        name: 'Remote Control Toy car',
        type: 'Not Applicable',
        description: 'High-quality Toy car for fun and adventure',
        price: 1200,
        image:
            'https://media.geeksforgeeks.org/wp-content/uploads/20240122182422/images1.jpg'
    },
    {
        name: 'Books',
        type: 'Women',
        description: 'You wll have a great time reading .',
        price: 5000,
        image:
            'https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg'
    },
    {
        name: 'Bag',
        type: 'Men',
        description: 'Comfortable and supportive Bag ',
        price: 800,
        image:
            'https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg'
    },
    {
        name: 'Winter hoodies for women',
        type: 'Women',
        description: 'Stay cozy in style with our womens hoodie, crafted for comfort ',
        price: 250,
        image:
            'https://media.geeksforgeeks.org/wp-content/uploads/20230407153938/gfg-hoodie.jpg'
    },

    {
        name: 'Honda car ',
        type: 'Men',
        description: 'Powerful Honda car with comfy driving',
        price: 700,
        image:
            'https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg'
    }
];


// router to add initial products to database
// app.post('/product', async (req, res) => {
//     try {
//         await product.insertMany(products)
//         res.status(200).json(products);
//         console.log("Initial products added to database");

//     } catch (error) {
//         console.log("Error: ", error);
//         res.status(500).json({ "Error": error })
//     }
// })

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