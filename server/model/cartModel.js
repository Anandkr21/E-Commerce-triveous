const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // Reference to the Product model
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1 // Minimum quantity of 1
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Cart = new mongoose.model('Cart', cartSchema);

module.exports = { Cart }
