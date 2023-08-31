const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5 // Minimum password length
    },
    avatar: {
        type: String // store image URLs here
    },
    role: {
        type: String,
        enum: ['Customer', 'Seller', 'Admin'],
        default: 'Customer'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false
})

const User = new mongoose.model('User', userSchema)

module.exports = { User }