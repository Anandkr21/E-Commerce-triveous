const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
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
    totalAmount: {
        type: Number,
        required: true,
        min: 0 // Minimum total amount of 0
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'completed', 'canceled'],
        default: 'pending'
    }
});

const Order = new mongoose.model('Order', orderSchema);

module.exports = { Order }
