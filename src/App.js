import React from 'react';
import { Router, Link } from "@reach/router"

class App extends React.Component {

	render() {
		return(
			<React.Fragment>
				<Link to="about">About Us</Link>
				<Router>
					<LoadableAbout path="about"/>
				</Router>
			</React.Fragment>
		);
	}
}

export default App