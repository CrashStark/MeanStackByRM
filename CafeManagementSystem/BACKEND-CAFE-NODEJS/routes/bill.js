const express = require("express");
const connection = require("../connection");
const router = express.Router();

let ejs = require("ejs");

let pdf = require("html-pdf");

let path = require("path");
var fs = require("fs");
var uuid = require("uuid");
var auth = require("../services/authentication");
const { route, report } = require("./product");

router.post("/generateReport", auth.authenticateToken, (req, res) => {
  const generateUuid = uuid.v1();
  const orderDetails = req.body;
  var productDetailsReport = JSON.parse(orderDetails.productDetails);

  var query =
    "insert into bill(name,uuid,email,contactNumber,paymentMethod,total,productDetails,createdBy) values(?,?,?,?,?,?,?,?)";

  connection.query(
    query,
    [
      orderDetails.name,
      generateUuid,
      orderDetails.email,
      orderDetails.contactNumber,
      orderDetails.paymentMethod,
      orderDetails.totalAmount,
      orderDetails.productDetails,
      res.locals.email,
    ],
    (err, results) => {
      if (!err) {
        ejs.renderFile(path.join(__dirname, '', "report.ejs"), {
          productDetails: productDetailsReport,
          name: orderDetails.name,
          email: orderDetails.email,
          contactNumber: orderDetails.contactNumber,
          paymentMethod: orderDetails.paymentMethod,
          totalAmount: orderDetails.totalAmount,
        },(err,html)=>{
            if(err){
                return res.status(500).json(err+"There is some issue");
            }else{
                pdf.create(html).toFile('./generated_pdf/' + generateUuid + ".pdf",function(err,results){
                    if(err){
                        console.log(err);
                        return res.status(500).json(er);
                    }else{
                        return res.status(200).json({uuid:generateUuid});
                    }
                });
            }
        });
      } else {
        return res.status(500).json(err);
      }
    }
  );
});

module.exports=router;