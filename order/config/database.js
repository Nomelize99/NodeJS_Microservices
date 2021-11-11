const mongoose = require("mongoose");
const {ORDER_URI} = process.env

exports.connect = () => {
    mongoose.connect(ORDER_URI ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
    console.log(`Connect to database Order ${ORDER_URI}`)
    })
    .catch((err) => {
        console.log(`Cannot Connect to database ${ORDER_URI}`)
        console.log(err);
        process.exit(1)
    })} 