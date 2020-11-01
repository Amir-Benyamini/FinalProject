const express = require('express')
const router = express.Router()
const Lesson = require('../models/lessonSchema')
const Users = require('../models/userSchema')

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



module.exports = router