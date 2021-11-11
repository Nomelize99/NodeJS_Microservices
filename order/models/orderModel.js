const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    customerID: { 
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    productID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
    ,
    orderDate: {
        type: Date,
        default: Date.now()
    }
});
const order = mongoose.model('order', productSchema);
module.exports = order;