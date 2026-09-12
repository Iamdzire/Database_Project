const productModel = require('./../model/productModel.js')
const userModel = require('./../model/userModel.js')
const cloudinary = require('../Config/cloudinary.js')


/** To upload a product, we;

* Find a user
* create the product
* Push the product id into the user's products array
* Save it
 */
const uploadProduct = async (req, res) => {
    try {
        const getUserID = await userModel.findById(req.params.id)
        const {name, description, price, category, stock, quantity, image} = req.body
        if (!getUserID) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        if(!req.file){
            return res.status(400).json({
                message: "Image not found...please upload an image"
            })
        }
        const result = await cloudinary.uploader.upload(req.file.path)
        const imageUrl = result.secure_url

        const product = await productModel.create({
            name, description, price, category, stock, quantity, image: imageUrl
        })

        await getUserID.products.push(product._id)
        await getUserID.save()
        return res.status(201).json({
            message: 'Product uploaded successfully', product
        })
    }catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


const getAllProducts = async (req, res) => {
    try {
        const getAll = await productModel.find()
        return res.status(200).json({
            message: "All products fetched successfully",
            data: getAll
        })
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {uploadProduct, getAllProducts}