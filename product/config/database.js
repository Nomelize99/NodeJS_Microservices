const mongoose = require('mongoose');
const { PRODUCT_URI }= process.env || 'mongodb://mongo:27017/Product';

exports.connect = () => {
    mongoose.connect(PRODUCT_URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(()=>{
        console.log(`Connect to Database Product ${PRODUCT_URI}`)
    })
    .catch((err)=>{
        console.log("Cannot connect to Database Product");
        console.log(err);
        process.exit(1);
    }) ;
}
