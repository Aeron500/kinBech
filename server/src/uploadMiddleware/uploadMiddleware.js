const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/avatar'),
  
    cb(null,'uploads/productImage');
    
    

  },
  filename: function (req, file, cb) {
    const imageName = req.body.productName + file.originalname;
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: 'avatar', maxCount: 50 },
  { name: 'productImage', maxCount: 50 }
]);

module.exports = upload;