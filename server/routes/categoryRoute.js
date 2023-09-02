const express = require('express');
const CategoryRoute = express.Router();
const { getCategories, addCategory, deleteCategory } = require('../controller/category');
const {authentication} = require('../middleware/authentication');

app.use(authentication);

CategoryRoute.get('/', getCategories);

CategoryRoute.post('/', addCategory);

CategoryRoute.delete('/:categoryId', deleteCategory);

module.exports = { CategoryRoute };