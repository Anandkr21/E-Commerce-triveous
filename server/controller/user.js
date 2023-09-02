const { User } = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                success: false,
                error: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 7);

        const newUser = new User({ name, email, password: hashedPassword });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: newUser
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


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }

        const token = jwt.sign({ userId: user._id }, process.env.secret_Key, { expiresIn: '1h' });

        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            Token: token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

module.exports = { registerUser, loginUser }