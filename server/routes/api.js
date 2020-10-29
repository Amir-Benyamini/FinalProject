const express = require('express')
const router = express.Router()
const Lesson = require('../models/lessonSchema')
const Users = require('../models/userSchema')
// const API = "cd62dc53-736a-4f56-8f1b-48721d583b45"

router.get('/alLessons', (req, res)  => {
	Lesson.find({ })
	.then((data) => {
		console.log('Data: ', data);
		res.json(data);
		res.end();
	})
	.catch((error) => {
		console.log("Error");
		res.end();
	});
});

router.get('/user', (req, res)  => {
	Users.find({ })
	.then((data) => {
		console.log('Data: ', data);
		res.json(data);
		res.end();
	})
	.catch((error) => {
		console.log("Error");
		res.end();
	});
});

// router.get('/user', function (req, res) {
//     Users.find({}, function (err, users) {
//         console.log(users)
//         res.send(users)
//     })
// })


module.exports = router