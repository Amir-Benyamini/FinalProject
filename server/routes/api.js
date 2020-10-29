const express = require('express')
const router = express.Router()
const Lesson = require('../models/lessonSchema')
const Users = require('../models/userSchema')
// const API = "cd62dc53-736a-4f56-8f1b-48721d583b45"

router.get('/alLessons', (req, res) => {
    Lesson.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log("Error")
        });
});

router.get('/user', function (req, res) {
    Users.find({}, function (err, lessons) {
        console.log(lessons)
        res.send(lessons)
    })
})


module.exports = router