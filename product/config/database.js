const mongoose = require("mongoose");
const { PRODUCT_URI }= process.env;

exports.connect = () => {
    mongoose.connect(PRODUCT_URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(()=>{
        console.log(`Connect to Database Product ${PRODUCT_URI}`)
    })
    .catch((err)=>{
        console.log(`Cannot connect to Database ${PRODUCT_URI}`);
        console.log(err);
        process.exit(1);
    }) ;
}
