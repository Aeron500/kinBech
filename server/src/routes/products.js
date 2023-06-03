const express=require('express')
const router=express.Router()
const upload = require('../uploadMiddleware/uploadProduct')

const path = require('path')
const fs =require('fs')

const Products = require('../model/products')

router.post('/products',upload, async (req, res) => {
    req.body.productImage= req?.file?.filename 
        const data = await Products.create(req.body)
        if (data) {
          res.json({
            message: "Your product has been registered",
            success: true
  
          })
        }
      }
    
  )
  router.get('/products',async (req, res) => {
        const productList = await Products.find()
        if (productList.length>0) {
          res.json({
            listOfProducts:productList
          })
        }
        else{
          res.json({response:"No products found"})
        }
      }
    
  )
  
  router.get('/productImage/:id', async (req, res) => {
    const productData = await Products.findById(req.params.id)
    const productPhoto = path.join(__dirname, '../../uploads/productImage', productData.productImage )
    const defaultImage = path.join(__dirname, '../../uploads/productImage', productData.productImage )
    if(fs.existsSync(productPhoto)){
      res.sendFile(productPhoto)
    }else{
      res.sendFile(defaultImage)
    }
  
  })
  module.exports=router;