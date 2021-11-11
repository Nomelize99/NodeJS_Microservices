const orderRoute = require("express").Router();
const order = require('../models/orderModel');

orderRoute.get("/order", async (req, res) => {
    const data = await order.find();
    if(data){
        res.status(200).send(data);
    }
    else{
        res.status(400).send('not found order')
    }
});
orderRoute.get("/order/:id", async (req, res) => {
    const data = await order.findById(req.params.id);
    if(data){
        res.status(200).send(data);
    }
    else{
        res.status(400).send('not found order')
    }
  });
orderRoute.post('/order', async (req,res) => {
    const {customerID,productID,amount} = req.body;
    const data = await order.create({customerID,productID,amount});
    if(data){
        res.status(201).send(`Created Customer ${customerID} ${productID} ${amount}`);
    }
    else{
        res.status(400).send("Error");
    }
});
orderRoute.delete('/order/delete/:id',async (req, res) =>{
    const data = await order.findByIdAndDelete(req.params.id);
    if(data){
        res.status(200).send(`${req.params.id} deleted`);
    }
    else{
        res.status(400).send('not found customer');
    }
});

module.exports = orderRoute;