const { json } = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDB').then((res)=>{
    console.log("Connection established");
}).catch((err)=>{
    console.log("An error occured" +JSON.stringify(err));
});



module.exports=mongoose;