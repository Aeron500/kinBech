const express = require("express");
const router=express.Router()
const Users=require("../model/users")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const upload = require('../uploadMiddleware/uploadMiddleware')
const path = require('path')
const fs =require('fs')
router.post("/register", upload,async (req, res) => {
    const data = await Users.findOne({phoneNumber:req.body.phoneNumber })
    console.log(data)
    if(data){
      res.json({
        msg: "Already exist",
        success:false
      })
    }else{
      console.log(req.body.password)
      const hash = await bcrypt.hash(req.body.password,0)
   
      console.log(hash)
      if(hash){
        req.body.password = hash
        req.body.ConfirmPassword=hash
        req.body.avatarName= req?.file?.filename 
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
  
  router.post("/login", async (req, res) => {
    const data = await Users.findOne(
      { phoneNumber: req.body.phoneNumber },
      
    );
    if (data) {
      //user cred match
      const isMatched = await bcrypt.compare(req.body.password, data.password)
      if (isMatched) {
        //generete the token for this matched user and send the token as reponse
        const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
        
        res.json({ message: "login succcess", success: true, token: token,role:data.role,id:data._id })
      } else {
        res.json({ message: "login failed", success: false })
      }
      
    }
    else {
      res.json({ message: "user does not exist", success: false })
    }
  });
  
router.get('/avatar/:id', async (req, res) => {
  try{
  const userData = await Users.findById(req.params.id)
  const userImage = path.join(__dirname, '../../uploads/avatar', userData.avatarName )
  const defaultImage = path.join(__dirname, '../../uploads/avatar', userData.avatarName )
  if(fs.existsSync(userImage)){
    res.sendFile(userImage)
  }else{
    res.sendFile(defaultImage)
  }
}catch(err){
  console.error(err)
}

})
  module.exports=router
  