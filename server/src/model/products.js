const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    productName: String,
    productCategory:String,
    productPrice: String,
    productDescription: String,
    productImage: {type: String, default: 'defaultProduct.png'},
});
  
  const Products = mongoose.model("Products", productSchema);
  module.exports=Products
