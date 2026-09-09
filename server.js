require('dotenv').config()
// For module javascript: Import 'dotenv/config'

const express = require('express')
const mongoose = require('mongoose');
const userRoute = require('./route/userRoutes.js')
const productRoute = require('./route/productRoute.js')

const compass_string = "mongodb://localhost:27017/cohort8_db"

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Connection Error: ", err));


const app = express()
const port = 3000

app.use(express.json())


app.get('/data',  (req, res) => {
    res.send("Server is active")
})

app.use('/users', userRoute)
app.use('/products', productRoute)



app.listen(port, () => console.log(`Server is now running on port ${port}`))
