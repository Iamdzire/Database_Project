const express = require('express')
const {uploadProduct, getAllProducts} = require('./../controller/productController')

const productRoute = express.Router()

productRoute.post('/upload/:id', uploadProduct)
productRoute.get('/get-all', getAllProducts)

module.exports = productRoute