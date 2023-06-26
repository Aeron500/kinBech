const express=require('express')
const router=express.Router()
// const jwt = require('jsonwebtoken')
// const path = require('path')
// const Carts = require('../model/cart')
const Users = require('../model/users')

router.post('/cart', async (req, res) => { //add to cart
    //user found in db?
    try{ 
    const { productId, userId, productName } = req.body;
  const userDetails= await Users.findOne({id:userId});
  const productDetails= await Users.findOne({productName:productName});
      
  const currentUserCarts = userDetails.userCarts
if(!productId) {
  currentUserCarts.push({productId,productQuantity:1})
} else {
  const existingCartItem = currentUserCarts.find((item) => item.productId === productId);
  if (existingCartItem) {
    existingCartItem.productQuantity++;

    res.json({ message: "Added to cart", success: true })
  } else {
    currentUserCarts.push({ productId, productQuantity: 1 });
    res.json({ message: "Added to cart", success: true })
}

  userDetails.userCarts= currentUserCarts
userDetails.save()
console.log(userDetails)

productDetails.userCarts= currentUserCarts
productDetails.save()
console.log(productDetails)
   
   } } catch(error) {
        console.log(error)
        //res.status(500).json({error:"Internal server error"})
    }  
})



router.get('/cart', async (req, res) => { //add to cart get

  try{

    const cartItems = await Carts.find({}) 
 
    res.send({status:"ok", data:cartItems}) //sending data to the frontend


  }catch(error){
    console.log(error)
  }
})

module.exports = router;