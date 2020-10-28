const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    userName: String,
    password:String,
    email: String,
    registerDate: Date
})

const User = mongoose.model("user", userSchema)
module.exports = User