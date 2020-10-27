import React from "react";
import {
	Link,
	Route
} from "react-router-dom";
import Main from './Main'


function Navbar() {
	return (
			<div id="Navbar">
				<img width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfnacERZPiwVi_mIZf6692t166nBQIfzHj9g&usqp=CAU" alt="logo"/>
			<Link to="/">Main</Link>
			<Link to="/lessons">Lessons</Link>

			<Route path="/" exact component= {Main} />
			

			</div>
			
	);
}

export default Navbar;