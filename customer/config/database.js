const mongoose = require("mongoose");
const {CUSTOMER_URI} = process.env;

exports.connect = () => {
    mongoose.connect(CUSTOMER_URI ,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
    })
    .then(() => {
    console.log(`Connect to database Customer ${CUSTOMER_URI}`)
    })
    .catch((err) => {
        console.log(`Cannot Connect to database ${CUSTOMER_URI}`)
        console.log(err);
        process.exit(1)
    })} 