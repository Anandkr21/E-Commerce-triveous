const express = require('express');
const UserRoute = express.Router();
const { registerUser, loginUser } = require('../controller/user');

UserRoute.post('/register', registerUser);

UserRoute.post('/login', loginUser);

module.exports = { UserRoute };