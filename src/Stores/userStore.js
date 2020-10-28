import { makeAutoObservable } from "mobx"

function createUser(user) {
    return makeAutoObservable({
        user  
 })
}

export default createUser;