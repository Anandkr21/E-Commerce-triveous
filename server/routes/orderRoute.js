const express = require('express');
const OrderRoute = express.Router();
const { placeOrder, getOrderHistory, getOrderDetails } = require('../controller/order');
const { authentication } = require('../middleware/authentication');

OrderRoute.post('/place-order', authentication, placeOrder);

OrderRoute.get('/order-history', authentication, getOrderHistory);

OrderRoute.get('/:orderId', authentication, getOrderDetails);

module.exports = { OrderRoute };