import React from "react";
import { observer, inject } from 'mobx-react'
import Lesson from './Lesson'

const  Lessons = inject("lessons") (observer((props) => {
	console.log(props.user)
	return (
			<div id="Lessons">
		{props.lessons.lessons.map(l => <Lesson lesson={l} />)}
			</div>
			
	);
}))


export default Lessons;