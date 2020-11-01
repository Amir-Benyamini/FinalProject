import { makeAutoObservable } from "mobx"
import { getUsers } from '../api'

function createUsersList(users) {
	return makeAutoObservable({
		users,
		async fetchUsers() {
			this.users = await getUsers();
		}
	})
}

export default createUsersList;