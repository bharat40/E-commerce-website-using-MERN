const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const product = require('./models/Product');
const productRoutes = require('./routes/ProductRoutes');
// middleware
app.use(cors());
app.use(express.json());

app.use('/product', productRoutes);





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