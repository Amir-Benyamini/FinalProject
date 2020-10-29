import { makeAutoObservable } from "mobx"
import { getLessons } from '../api'

function createLessonsList(lessons) {
	return makeAutoObservable({
		lessons,
		async fetchLessons() {
			this.lessons = await getLessons();
		}
	})
}

export default createLessonsList;