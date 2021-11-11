const express = require('express');
const cors = require('cors');
const orderRoute = require('./routes/orderRoute');
const port = process.env.ORDER_PORT || 5000
require('dotenv').config();
require('./config/database').connect();


const app = express();
app.use(cors());
app.use(express.json());
app.use(orderRoute);

app.listen(port,()=>{
    console.log(`Order server running on Port ${port}`);
})
