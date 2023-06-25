const express = require("express");
const router = express.Router();
const upload = require("../uploadMiddleware/uploadProduct");

const path = require("path");
const fs = require("fs");

const Products = require("../model/products");

router.post("/products", upload, async (req, res) => {
  req.body.productImage = req?.file?.filename;
  try {
    const data = await Products.create(req.body);
    if (data) {
      res.json({
        message: "Your product has been registered",
        success: true,
      });
    }
  } catch (e) {
    console.error(e);
  }
});
router.get("/products", async (req, res) => {
  try{
  const productList = await Products.find()
  if (productList.length > 0 ) {
    res.json({
      listOfProducts: productList,
    });
  } else {
    res.json({ response: "No products found" });
  }
}catch(e){
  console.error(e)
}
});


// router.get("/admin-products", async (req, res) => {
//   try{
//   const productList = await Products.find();
//   if (productList.length > 0) {
//     res.json({
//       listOfProducts: productList,
//     });
//   } else {
//     res.json({ response: "No products found" });
//   }
// }catch(e){
//   console.error(e)
// }
// });

router.get("/products/:id", async (req, res) => {
  try{
 const productDetailsList = await Products.findById(req.params.id);
 console.log(req.params)
 if(!productDetailsList){
  return res.send("No product details to show")
 }else{
  res.json({
    productDetailList:productDetailsList
  })}
  }
  catch(e)
  {
    console.error(e)
  }
})

router.delete("/products", async (req, res) => {
  try{
 const productDetailsList = await Products.findByIdAndDelete(req.body.id);
 if(!productDetailsList){
  return res.send("No products to delete")
 }else{
  res.json({
    productDetailList:productDetailsList
  })}
  }
  catch(e)
  {
    console.error(e)
  }
})
router.get("/productImage/:id", async (req, res) => {
  try{
  const productData = await Products.findById(req.params.id);
  const productPhoto = path.join(
    __dirname,
    "../../uploads/productImage",
    productData.productImage
  );
  const defaultImage = path.join(
    __dirname,
    "../../uploads/productImage",
    productData.productImage
  );
  // console.log(productPhoto)
  if (fs.existsSync(productPhoto)) {
    res.sendFile(productPhoto);
  } else {
    res.sendFile(defaultImage);
  }
}catch(err){
  console.error(err)
}
});
module.exports = router;
