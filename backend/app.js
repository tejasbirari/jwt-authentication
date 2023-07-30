require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const db = require('./database/Connection')

app.use(cors());
app.use(express.json());

USER_ROUTE = require('./routes/userRoutes');

app.use('/api/login', USER_ROUTE);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const start = async() => {
    try {
        await db();
        app.listen(PORT, () => {
            console.log('server is running');
            // console.log(process.env.SECRET_KEY);
        })
    } catch (error) {
        console.log(error);
    }
}

start();