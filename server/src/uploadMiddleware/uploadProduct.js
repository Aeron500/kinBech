const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/productImage");
  },
  filename: function (req, file, cb) {
    const imageName = file.originalname;
    cb(null, imageName);
  },
});

const upload = multer({ storage: storage }).single("productImage");

module.exports = upload;