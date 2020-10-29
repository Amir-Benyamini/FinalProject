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
	console.log(props.usersStore.users)
	return (
		<div id="Navbar">
			{props.usersStore ?
				<div>
					<img width="100" height="100" alt='profile' src={props.usersStore.users[1].img} />
					<span>Welcome: {props.usersStore.users[1].name}</span>
					<Link to="/">Main</Link>
					<Link to="/lessons">Lessons</Link>
					<Link to="/acount">Acount</Link>
					<Route path="/" exact component={Main} />
					{/* <Route path="/lessons" exact component={VideoRoom} /> */}
				</div>
				:
				<div>
					<img width="100" height="100" alt='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfnacERZPiwVi_mIZf6692t166nBQIfzHj9g&usqp=CAU" />
					<Link to="/">Main</Link>
					<Link to="/lessons">Lessons</Link>
				</div>
			}
		</div>
	);
}))

export default Navbar;