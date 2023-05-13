const express = require("express");
const jwt = require('jsonwebtoken')
require('dotenv').config()
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();

const port = 4000;
app.use(cors());

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/kinBech"
    );
    if (connection) {
      console.log("connnectd to mongodb");
    }
  } catch (err) {
    console.log(err);
  }
};
connectToDb();

const userSchema = new mongoose.Schema({
  FullName: String,
  phoneNumber: String,
  address: String,
  Email: String,
  password: String,
  ConfirmPassword: String,
});

const Users = mongoose.model("Users", userSchema);

console.log("connected to database");
app.use(express.json());

app.post("/register", async (req, res) => {
  const data = await Users.findOne({phoneNumber:req.body.phoneNumber })
  console.log(data)
  if(data){
    res.json({
      msg: "Already exist",
      success:false
    })
  }else{
    const hash = await bcrypt.hash(req.body.password, 0)
    console.log(hash)
    if(hash){
      req.body.password = hash
      req.body.ConfirmPassword=hash
      const data = await Users.create(req.body)
      if(data) {
        res.json({
          msg: "Register success",
          success:true
        })
      }
    }
  }
  
  })

app.post("/login", async (req, res) => {
  const data = await Users.findOne(
    { phoneNumber: req.body.phoneNumber },
    
  );
  if (data) {
    //user cred match
    const isMatched = await bcrypt.compare(req.body.password, data.password)
    if (isMatched) {
      //generete the token for this matched user and send the token as reponse
      const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
      console.log(token)
      res.json({ message: "login succcess", success: true, token: token })
    } else {
      res.json({ message: "login failed", success: false })
    }
    
  }
  else {
    res.json({ message: "user does not exist", success: false })
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
