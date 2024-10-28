const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    }
},{timestamps: true})

module.exports = mongoose.model('User', UserSchema);