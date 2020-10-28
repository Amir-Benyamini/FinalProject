import { makeAutoObservable } from "mobx"

function createLessonsList(lessons) {
    return makeAutoObservable({
        lessons  
 })
}

export default createLessonsList;