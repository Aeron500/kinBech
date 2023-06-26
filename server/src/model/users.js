const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    FullName: String,
    phoneNumber: String,
    address: String,
    Email: String,
    password: String,
    ConfirmPassword: String,
    role:String,
    avatarName: {type: String, default: 'defaultAvatar.png'},
    userCarts: [{productId: {type: mongoose.Schema.Types.String, ref: 'product'}, productQuantity: {type:String}, productName: {type:String}}]
  });
  
  const Users = mongoose.model("Users", userSchema);
  module.exports=Users
 