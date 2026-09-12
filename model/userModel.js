const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}] // A user can have many products which is the reason for this line of code. so we have to upload products to the user
});

// This is how you use default export using common js. 
const userModel = mongoose.model('User', userSchema)
module.exports = userModel

// This can also be written as
// module.exports = mongoose.model('User', userSchema);
