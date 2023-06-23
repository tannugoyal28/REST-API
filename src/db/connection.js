const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/olympics",{
    useUnifiedTopology:true,
    // useCreateIndex:true,
    useNewUrlParser:true
}).then(() => {
    console.log("successfuly connected to the database");
}).catch((e)=>{
    console.log(`unsuccessful connection due to : ${e}`);
})