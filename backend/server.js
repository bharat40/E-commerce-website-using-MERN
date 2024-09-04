const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

// middleware
app.use(cors());

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
app.post('/product', async (req, res) => {
    try {
        await product.insertMany(products)
        res.status(200).json(products);
        console.log("Initial products added to database");

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ "Error": error })
    }
})

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