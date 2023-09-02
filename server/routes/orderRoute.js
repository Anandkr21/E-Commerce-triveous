const express = require('express');
const OrderRoute = express.Router();
const { placeOrder, getOrderHistory, getOrderDetails } = require('../controller/order');
const {authentication} = require('../middleware/authentication');

app.use(authentication);

OrderRoute.post('/place-order', placeOrder);

OrderRoute.get('/order-history', getOrderHistory);

OrderRoute.get('/:orderId', getOrderDetails);

module.exports = { OrderRoute };