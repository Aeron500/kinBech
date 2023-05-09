const express = require("express");
//
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
      msg: "Already exist"
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
          msg: "Register success"
        })
      }
    }
  }
  
  })

app.post("/login", async (req, res) => {
  const data = await Users.findOne(
    { phoneNumber: req.body.phoneNumber },
    { password: req.body.password }
  );
  if (data) {
    res.json({ msg: "Login success" });
  } else {
    res.json({ msg: "Login failed" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
