const express = require('express')
const {createUser, getAllUsers, getSingleUser, updateUser, deleteUser} = require('./../controller/userController.js')

const userRoute = express.Router()

userRoute.post('/new-user', createUser)
userRoute.get('/all-users', getAllUsers)
userRoute.get('/get-one-user/:id', getSingleUser)
userRoute.patch('/update-user/:id', updateUser)
userRoute.delete('/delete-user/:id', deleteUser)

module.exports = userRoute