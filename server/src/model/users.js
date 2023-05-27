const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    FullName: String,
    phoneNumber: String,
    address: String,
    Email: String,
    password: String,
    ConfirmPassword: String,
    role:String,
    avatarName: {type: String, default: 'defaultAvatar.png'}
  });
  
  const Users = mongoose.model("Users", userSchema);
  module.exports=Users
 