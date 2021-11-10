const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/productRoute');
const port = process.env.PRODUCT_PORT || 4000
require('dotenv').config();
require('./config/database').connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(productRoute);

app.listen(port, () =>{
    console.log(`Product server running on Port ${port}`)
})