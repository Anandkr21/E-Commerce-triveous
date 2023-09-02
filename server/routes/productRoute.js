const express = require('express');
const ProductRoute = express.Router();
const { getProductsByCategory, getProductDetails, addProduct, getAllProducts, deleteProduct } = require('../controller/product');
const { authentication } = require('../middleware/authentication');

ProductRoute.get('/ByCategory/:categoryId', authentication, getProductsByCategory);

ProductRoute.get('/:productId', authentication, getProductDetails);

ProductRoute.get('/', authentication, getAllProducts);

ProductRoute.post('/create', authentication, addProduct);

ProductRoute.delete('/:productId', authentication, deleteProduct);

module.exports = { ProductRoute };