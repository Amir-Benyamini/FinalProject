import React from "react";
import {
	Link,
	Route
} from "react-router-dom";
import VideoRoom from './VideoRoom'

function Lesson(props) {
	return (
			<div id="Lesson">
			
				<h2>{props.lesson.title}</h2>
				<p>{props.lesson.decription}</p>
				<img width="400" height="200" alt='thumbmile' src={props.lesson.img}/>
	<p>Teacher: {props.lesson.teacher} - Duration: {props.lesson.duration} Minutes - Price: {props.lesson.price}$ - Level: {props.lesson.level}</p>

	<Link to={`/${props.lesson.title}`}><button>Register</button></Link>
	<Route path={`/${props.lesson.title}`} exact render= {() => <VideoRoom lesson={props.Lesson}/>}/>
			</div>
			
	);
}

export default Lesson;