import React, { useEffect, useState } from "react";
import {
	Link,
	Route
} from "react-router-dom";
import Main from './Main'
// import VideoRoom from './VideoRoom'
import { observer, inject } from 'mobx-react'

const Navbar = inject("usersStore")(observer((props) => {
	useEffect(async () => {
		props.usersStore.fetchUsers()
	},[]);
	const [user, setUser] = useState('')
	const [currentUser, setCurrentUser] = useState({name:'Guest'})

	const userLogin = () => {
		const findUser = props.usersStore.users.find(u => u.name === user )
		console.log(findUser)
		setCurrentUser(findUser)
	}

	const handleOnChange = (e) => {
		const input = e.target.value
		setUser(input)
	}

	console.log(props.usersStore.users)
	return (
		<div id="Navbar">
			{
				<div>
					<input type="text" placeholder='userName' value={user} onChange={handleOnChange}/>
					<button onClick={userLogin}>Login</button>
					<span>Welcome:{currentUser.name}</span>
					<Link to="/">Main</Link>
					<Link to="/lessons">Lessons</Link>
					<Link to="/acount">Acount</Link>
					<Route path="/" exact component={Main} />
					{/* <Route path="/lessons" exact component={VideoRoom} /> */}
				</div>
				
			}
		</div>
	);
}))

export default Navbar;