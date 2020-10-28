import './App.css'
import React from "react";
import {
	BrowserRouter as Router
} from "react-router-dom";
import NavbarMain from './components/Navbar'

function App() {
	return (
		<Router>
			<div id="App">
				<div id='Nav-container'>
					<NavbarMain />
				</div>
				
			</div>
		</Router>

	);
}

export default App;
