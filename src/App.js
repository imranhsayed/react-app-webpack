import React from 'react';
import { Router, Link } from "@reach/router";
import About from "./components/About";

class App extends React.Component {

	render() {
		return(
			<React.Fragment>
				<About/>
			</React.Fragment>
		);
	}
}

export default App
