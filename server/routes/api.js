const express = require('express')
const router = express.Router()
const Lessons = require('../models/lessonSchema')
const Users = require('../models/userSchema')


router.get('/allLessons', function (req, res) {
    Lessons.find({}, function (err, lessons) {
        console.log(lessons)
        res.send(lessons)
    })
})

router.get('/user', function (req, res) {
   
})




module.exports = router
