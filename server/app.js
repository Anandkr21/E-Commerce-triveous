const express = require('express');
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    res.status(200).send({
        status: true,
        msg: 'Welcome to Triveous E-Commerece Website !'
    });
});

module.exports = { app }
