const express = require('express');
const CategoryRoute = express.Router();
const { getCategories, addCategory, deleteCategory } = require('../controller/category');

CategoryRoute.get('/', getCategories);

CategoryRoute.post('/', addCategory);

CategoryRoute.delete('/:categoryId', deleteCategory);

module.exports = { CategoryRoute };