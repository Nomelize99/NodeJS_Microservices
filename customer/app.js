const { Console } = require('console');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.CUSTOMER_PORT || 3000;
require('./config/database').connect();
const customerRoute = require('./routes/customerRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(customerRoute);

app.listen(port,() => {
    console.log(`Customer server running on Port ${port}`);
})