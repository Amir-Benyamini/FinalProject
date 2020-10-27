import './App.css'
import React from "react";
import {
	BrowserRouter as Router
} from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
	return (
		<Router>
			<div id="App">
				<div id='Nav-container'>
					<Navbar />
				</div>
				
			</div>
		</Router>

	);
}

export default App;
