const mongoose = require('mongoose');

const {MONGO_URI} = process.env || 'mongodb://mongo:27017/Customer'

exports.connect = () => {
    mongoose.connect(MONGO_URI ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
    console.log("Connect to database Customer")
    })
    .catch((err) => {
        console.log("Cannot Connect to database Customer")
        console.log(err);
        process.exit(1)
    })} 