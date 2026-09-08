const express = require('express')
const mongoose = require('mongoose');
const userRoute = require('./route/userRoutes.js')
const productRoute = require('./route/productRoute.js')

const compass_string = "mongodb://localhost:27017/cohort8_db"
const atlas_string = "mongodb+srv://uchendu:Chigozie03.@cluster0.vkuzzsu.mongodb.net/cohort8_db?appName=Cluster0"

mongoose.connect(compass_string)
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
