const express=require('express');
var cors=require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user');
const categoryroutes=require('./routes/category');
const productRoute=require('./routes/product');
const billRoute = require('./routes/bill');
const dashBoardRoute = require('./routes/dashboard');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/user',userRoute);
app.use('/category',categoryroutes);
app.use('/product',productRoute);
app.use('/dashboard',dashBoardRoute);
app.use('/bill',billRoute);
module.exports=app;