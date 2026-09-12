require('dotenv').config()
// For module javascript: Import 'dotenv/config'

const express = require('express')
const mongoose = require('mongoose');
const userRoute = require('./route/userRoutes.js')
const productRoute = require('./route/productRoute.js')

const compass_string = process.env.COMPASS_STRING

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Connection Error: ", err));


const app = express()
const port = 3000

app.use(express.json())


app.get('/',  (req, res) => {
    res.send("Welcome")
})

app.use('/users', userRoute)
app.use('/products', productRoute)



app.listen(port, () => console.log(`Server is now running on port ${port}`))
