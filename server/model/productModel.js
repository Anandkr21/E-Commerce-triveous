const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Reference to the Category model
        required: true
    },
    imageUrl: {
        type: String,
    },

    reviews: [
        {
            rating: {
                type: Number,
                min: 1, // Minimum rating value
                max: 5  // Maximum rating value
            }
            // You might consider adding user references and other review details
        }
    ],
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' // Reference to the User model
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' // Reference to the User model
            },
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Product = new mongoose.model('Product', productSchema);

module.exports = { Product }
