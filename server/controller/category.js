const Category = require("../model/categoryModel");

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({
            success: true,
            message: "Categories retrieved successfully",
            data: categories,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
};

const addCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const existingCategory = await Category.findOne({ name });

        if (existingCategory) {
            return res.status(400).json({
                success: false,
                error: "Category already exists"
            });
        }

        const newCategory = new Category({ name });
        await newCategory.save();

        res.status(201).json({
            success: true,
            message: "Category added successfully",
            data: newCategory,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
            msg: error.message
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const result = await Category.deleteOne({ _id: categoryId });

        if (result.deletedCount === 0) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: "Category not found"
                });
        }

        res.status(204).json({
            message: "Category deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
            msg: error.message
        });
    }
};

module.exports = { 
    getCategories, 
    addCategory, 
    deleteCategory 
};