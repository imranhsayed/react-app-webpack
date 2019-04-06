import React from 'react';
import Nav from './Nav';

class About extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			name: false
		};
	}

	handleOnClick = ( event ) => {
		this.setState({ name: ! this.state.name });
	};



	render() {

		return(
			<div>
				This is About
				<button onClick={this.handleOnClick}>Click Me</button>
				{ ! this.state.name && <Nav/>}
			</div>
		);
	}
}

export default About;
