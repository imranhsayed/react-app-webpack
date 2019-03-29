import React from 'react';
import HOC from './HOC';

class AboutSection extends React.Component {

	render() {
		return(
			<div>
				This is About
				<h2 onClick={ this.props.incrementCount }>Clicked { this.props.count } times</h2>
			</div>
		);
	}
}

const About = HOC( AboutSection );
export default About;