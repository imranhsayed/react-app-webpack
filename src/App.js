import React from 'react';
import { Router, Link } from "@reach/router";
import About from "./components/About";

class App extends React.Component {

	render() {
		return(
			<React.Fragment>
				<Link to="about">About Us</Link>
				<Router>
					<About path="/about"/>
				</Router>
			</React.Fragment>
		);
	}
}

export default App