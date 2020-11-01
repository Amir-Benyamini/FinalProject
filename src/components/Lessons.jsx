import React, { useEffect, useState } from "react";
import { observer, inject } from 'mobx-react'
import Lesson from './Lesson'

const Lessons = inject("lessonsStore")(observer((props) => {
	useEffect(async () => {
		props.lessonsStore.fetchLessons()
	}, []);

	return (
		<div id="Lessons">
			{props.lessonsStore.lessons.map((lesson, i)=> <Lesson key={i} lesson={lesson} />)}
		</div>
	);
}))


export default Lessons;