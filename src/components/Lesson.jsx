import React from "react";

function Lesson(props) {
	return (
			<div id="Lesson">
			<div>
				<h2>{props.lesson.title}</h2>
				<p>{props.lesson.decription}</p>
				<img width="400" height="200" alt='thumbmile' src={props.lesson.img}/>
	<p>Teacher: {props.lesson.teacher} - Duration: {props.lesson.duration} Minutes - Price: {props.lesson.price}$ - Level: {props.lesson.level}</p>
	<button>Register</button>
			</div>
			</div>
			
	);
}

export default Lesson;