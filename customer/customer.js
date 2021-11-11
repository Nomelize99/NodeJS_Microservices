const express = require('express');
const cors = require('cors');
const customerRoute = require('./routes/customerRoute');
const port = process.env.CUSTOMER_PORT || 3000;
require('dotenv').config();
require('./config/database').connect();

const app = express();
app.use(cors());
app.use(express.json());
app.use(customerRoute);

app.listen(port,() => {
    console.log(`Customer server running on Port ${port}`);
})