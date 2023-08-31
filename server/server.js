const { connection } = require('./config/db');
const { app } = require('./app')
require('dotenv').config()

const Port = process.env.PORT || 8080

app.listen(Port, async () => {
    try {
        await connection
        console.log('Connected to DB');
    } catch (error) {
        console.log('Error conncting with DB', error);
    }
    console.log(`Server is running at http://localhost:${Port}`);
});

