const express = require('express');
const CategoryRoute = express.Router();
const { getCategories, addCategory, deleteCategory } = require('../controller/category');
const { authentication } = require('../middleware/authentication');

CategoryRoute.get('/getall', authentication, getCategories);

CategoryRoute.post('/create', authentication, addCategory);

CategoryRoute.delete('/:categoryId', authentication, deleteCategory);

module.exports = { CategoryRoute };