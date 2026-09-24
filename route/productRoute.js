const express = require('express')
const {uploadProduct, getAllProducts} = require('./../controller/productController.js')
const upload = require('../Config/multer')
const protect = require('../middleware/authMiddleware.js')

const productRoute = express.Router()

productRoute.post('/upload/:id', protect, upload.single('image'), uploadProduct)
productRoute.get('/get-all', getAllProducts)

module.exports = productRoute