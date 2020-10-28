const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lessonSchema = new Schema({
    title: String,
    description: String,
    img: String,
    teacher: String,
    duration: Number,
    price: Number,
    level: String
})

const Lesson = mongoose.model("lesson", lessonSchema)
module.exports = Lesson

