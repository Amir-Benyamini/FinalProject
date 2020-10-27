import React from "react";
import { observer, inject } from 'mobx-react'
import Lesson from './Lesson'

const  Lessons = inject("leesons") (observer((props) => {
	console.log(props)
	return (
			<div id="Lessons">
		{props.leesons.lessons.map(l => <Lesson lesson={l} />)}
			</div>
			
	);
}))


export default Lessons;