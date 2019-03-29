import React from 'react';
import HOC from './HOC';

class AboutSection extends React.Component {
	render() {
		return(
			<div>
				<h2>Home Component</h2>
			</div>
		);
	}
}

const About = HOC( { ready: true } )( AboutSection );
export default About;