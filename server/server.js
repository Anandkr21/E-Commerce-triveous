const { connection } = require('./config/db');
const express = require('express');

const { UserRoute } = require('./routes/userRoute');
const { ProductRoute } = require('./routes/productRoute');
const { CategoryRoute } = require('./routes/categoryRoute');
const { OrderRoute } = require('./routes/orderRoute');

require('dotenv').config()

const app = express()
app.use(express.json())

const Port = process.env.PORT || 8080

app.get('/', async (req, res) => {
    res.status(200).send({
        status: true,
        msg: 'Welcome To Base API !'
    });
});

app.use('/user', UserRoute);
app.use('/product', ProductRoute);
app.use('/order', OrderRoute);
app.use('/category', CategoryRoute);

app.listen(Port, async () => {
    try {
        await connection
        console.log('Connected to DB');
    } catch (error) {
        console.log('Error conncting with DB', error);
        console.log(error);
    }
    console.log(`Server is running at http://localhost:${Port}`);
});

