const customerRoute = require('express').Router();
const customer = require('../models/customerModel');

customerRoute.get('/customer', async (req,res) => {
    const data = await customer.find() ;
    res.status(200).json(data);
});
customerRoute.post('/customer', async (req,res) => {
    const {firstname,lastname} = req.body;
    const data = await customer.create({firstname,lastname});
    if(data){
        res.status(201).send(`Created Customer ${firstname} ${lastname}`);
    }
    else{
        res.status(400).send("Error");
    }
});
customerRoute.get('/customer/:id',async (req,res) => {
    const data = await customer.findById(req.params.id);  
    if(data){
        res.status(200).send(data);
    }
    else{
        res.status(400).send('not found customer');
    }
});
customerRoute.put('/customer/edit/:id', async (req,res) => {
        const data = await customer.findByIdAndUpdate(req.params.id,{$set:req.body});
        if(data){
            res.status(200).send(`${req.params.id} updated`);
        }
        else{
            res.status(402).send('cannot update');
        }
});
customerRoute.delete('/customer/delete/:id',async (req, res) =>{
    const data = await customer.findByIdAndDelete(req.params.id);
    if(data){
        res.status(200).send(`${req.params.id} deleted`);
    }
    else{
        res.status(400).send('not found customer');
    }
});

module.exports = customerRoute;