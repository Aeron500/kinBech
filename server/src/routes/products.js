const express=require('express')
const router=express.Router()
const upload = require('../uploadMiddleware/uploadMiddleware')

const path = require('path')
const fs =require('fs')

const Products = require('../model/products')

router.post('/products',upload, async (req, res) => {
    req.body.productIcon= req?.file?.filename 
        const data = await Products.create(req.body)
        if (data) {
          res.json({
            message: "Your product has been registered",
            success: true
  
          })
        }
      }
    
  )
  router.get('/productImage/:id', async (req, res) => {
    const productData = await Products.findById(req.params.id)
    const productPhoto = path.join(__dirname, '../../uploads/productImage', productData.productIcon )
    const defaultImage = path.join(__dirname, '../../uploads/productImage', productData.productIcon )
    if(fs.existsSync(productPhoto)){
      res.sendFile(productPhoto)
    }else{
      res.sendFile(defaultImage)
    }
  
  })
  module.exports=router;