const jwt = require('jsonwebtoken')
const userModel = require('../model/userModel.js')

const protect = async (req, res, next) => {
    try {
        let token

        // Check if token exists in the header
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1]
        }
        if(!token){
            return res.status(401).json({
                Message: "Not authorised, no token"
            })
        }
        // Verify the token and extract the data(like {id: user._id}) and stores it in decoded
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        

        // Get the user from the token and attach to request
        req.user = await userModel.findById(decoded.id).select('-password')
        
        if(!req.user){
            return res.status(401).json({
                Message: "User not found"
            })
        }
        next()
    }catch(error){
        return res.status(401).json({
            Message: "Not authorized, token failed"
        })
    }
}

module.exports = protect