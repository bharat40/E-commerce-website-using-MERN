const mongoose = require('mongoose');
// product schema
const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String,
    image: String,
    price: Number
})
// product model
module.exports = mongoose.model('product', productSchema);