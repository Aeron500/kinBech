const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    FullName: String,
    phoneNumber: String,
    address: String,
    Email: String,
    password: String,
    ConfirmPassword: String,
  });
  
  const Users = mongoose.model("Users", userSchema);
  module.exports=Users