const express = require("express");
const connection = require("../connection");
const { request, response, route } = require("..");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodeMailer = require("nodemailer");
require("dotenv").config();
var auth=require('../services/authentication');
var checkRole=require('../services/checkRole');


router.post("/signUp", (req, res) => {
  let user = req.body;
  query = "select email,password,role,status from user where email =?";
  connection.query(query, [user.email], (err, results) => {
    if (!err) {
      if (results.length <= 0) {
        query =
          "insert into user (name,contactNumber,email,password,status,role) values (?,?,?,?,'false','user')";
        connection.query(
          query,
          [user.name, user.contactNumber, user.email, user.password],
          (err, results) => {
            if (!err) {
              return res
                .status(200)
                .json({ message: "Successfully Registered" });
            } else {
              return response.status(500).json(err);
            }
          }
        );
      } else {
        return res.status(400).json({ message: "Email Already Exist." });
      }
    } else {
      return res.status(500).json(err);
    }
  });
});

router.post("/login", (req, res) => {
  const user = req.body;
  query = "select email, password,role,status from user where email=?";
  connection.query(query, [user.email], (err, results) => {
    if (!err) {
      if (results.length <= 0 || results[0].password != user.password) {
        return res
          .status(401)
          .json({ message: "Incorrect Username or password" });
      } else if (results[0].status === "false") {
        return res.status(401).json({ message: "Wait for admin Approval" });
      } else if (results[0].password == user.password) {
        const response = { email: results[0].email, role: results[0].role };
        const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, {
          expiresIn: "8h",
        });
        return res.status(200).json({ token: accessToken });
      } else {
        return res
          .status(400)
          .json({ message: "Something went wrong!!! Please try again letter" });
      }
    } else {
      return res.status(500).json(err);
    }
  });
});

var transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.PASSWORD,
  },
});

router.post("/forgotpassword", (req, res) => {
  const user = req.body;
  query = "select email,password from user where email=?";
  connection.query(query, [user.email], (err, results) => {
    if (!err) {
      if (results.length <= 0) {
        return response
          .status(200)
          .json({ message: "Password sent successfully to tour email" });
      } else {
        var mailOptions = {
          from: process.env.EMAIL,
          to: results[0].email,
          subject: "Password by Cafe Management System",
          html:
            "<p><b>Your Login details for cafe Management System<b/><br><b>Email:</b>" +
            results[0].email +
            "<br><b>Password:</b>" +
            results[0].password +
            '<br><a href="http://localhost:4200/">Click Here to Login</a></p>',
        };
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Email sent :" + info.response);
          }
        });
        return response
          .status(200)
          .json({ message: "Password sent successfully to tour email" });
      }
    } else {
      return res.status(500).json(err);
    }
  });
});

router.get("/get",auth.authenticateToken,checkRole.checkRole, (req, res) => {
  var query =
    'select id,name,email,contactNumber,status from user where role="user"';
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
});

router.patch("/update",auth.authenticateToken,checkRole.checkRole, (req, res) => {
  let user = req.body;
  var query = "update user set status=? whereid=?";
  connection.query(query, [user.status, user.id], (err, results) => {
    if (!err) {
      if (results.affectedRows == 0) {
        return response.status(404).json({ message: "User id does not exist" });
      }
      return res.status(200).json({ message: "User Updated Successfully" });
    } else {
      return res.status(500).json(err);
    }
  });
});

router.get('/checkToken',auth.authenticateToken,(req,res)=>{
  return res.status(200).json({message:"true"})
})

router.post('/changePassword',auth.authenticateToken,(req,res)=>{
 const user =req.body;
 const email =res.locals.email;
 query ="select * from user where email=? and password=?";
 connection.query(query,[email,user.oldPassword],(err,results)=>{
  if(!err){
    if(results.length<=0){
      return res.status(400).json({message:"Incorrect Old Password"});
    }else if(results[0].password===user.oldPassword){
      query="update user set password=? where email=?";
      connection.query(query,[user.newPassword,email],(err,results)=>{
        if(!err){
          return res.status(200).json({message:"Password Updated Successfully"});
        }else{
          return res.status(500).json(err);
        }
      })
    }else{
      return res.status(400).json({message:"Something went wrong. Please try again later"});
    }
  }
  else{
    return res.status(500).json(err);
  }
 })
})
module.exports = router;