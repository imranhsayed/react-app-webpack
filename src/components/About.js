import React from 'react';

class About extends React.Component {

	static getDerivedStateFromProps() {
		console.log( 'I am called' );
	}

	render() {
		return(
			<div>
				This is About
			</div>
		);
	}
}

export default About;
