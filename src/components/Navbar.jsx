import React from "react";
import {
	Link,
	Route
} from "react-router-dom";
import Main from './Main'
import { observer, inject } from 'mobx-react'

const Navbar = inject("user") (observer((props) => {
	console.log(props.user.user.img)
	return (
		<div id="Navbar">
				{props.user ? 
				<div>
					<img width="100" height="100" alt='profile' src={props.user.user.img}/>
					<span>Welcome: {props.user.user.name}</span>
					<Link to="/">Main</Link>
					<Link to="/lessons">Lessons</Link>
					<Link to="/acount">Acount</Link>
					<Route path="/" exact component= {Main} />
					
				</div>
					 :
				<div>
					<img width="100" height="100" alt='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfnacERZPiwVi_mIZf6692t166nBQIfzHj9g&usqp=CAU"/>
					<Link to="/">Main</Link>
					<Link to="/lessons">Lessons</Link>
					nouser
				</div>
					
			}
			</div>
	);
}))

export default Navbar;