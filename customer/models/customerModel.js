const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true 
    },
    lastname: {
        type: String,
        required: true 
    }
});
const customer = mongoose.model('customer',customerSchema);

module.exports = customer;