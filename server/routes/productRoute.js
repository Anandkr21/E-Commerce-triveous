const express = require('express');
const ProductRoute = express.Router();
const { getProductsByCategory, getProductDetails, addProduct, getAllProducts, deleteProduct } = require('../controller/product');

ProductRoute.get('/ByCategory/:categoryId', getProductsByCategory);

ProductRoute.get('/:productId', getProductDetails);

ProductRoute.get('/', getAllProducts);

ProductRoute.post('/', addProduct);

ProductRoute.delete('/:productId', deleteProduct);

module.exports = { ProductRoute };