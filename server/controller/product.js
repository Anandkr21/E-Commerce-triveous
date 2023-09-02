const Product = require('../model/productModel');
const Category = require("../model/categoryModel");

const getProductsByCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const products = await Product.find({ category: categoryId });
        res.status(200).json({
            success: true,
            message: 'Products retrieved successfully',
            data: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({
            success: true,
            message: 'All products retrieved successfully',
            data: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const getProductDetails = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }
        res.json({
            success: true,
            message: 'Product retrieved successfully',
            data: product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        });
    }
};

const addProduct = async (req, res) => {
    try {
        const { title, price, description, availability, category,imageUrl,reviews,likes } = req.body;

        const existingCategory = await Category.findOne({ name: category });

        if (!existingCategory) {
            return res.status(400).json({
                success: false,
                error: 'Category does not exist'
            });
        }

        const newProduct = new Product({
            title,
            price,
            description,
            availability,
            category: existingCategory._id,
            imageUrl,
            reviews,
            likes
        });

        await newProduct.save();

        res.status(201).json({
            success: true,
            message: 'Product added successfully',
            data: newProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        const result = await Product.deleteOne({ _id: productId });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                error: 'Product not found',
            });
        }

        res.status(204).json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

module.exports = { getProductsByCategory, getProductDetails, addProduct, deleteProduct, getAllProducts };