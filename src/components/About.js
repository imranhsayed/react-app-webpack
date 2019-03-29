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
/**
 * We are importing the HOC and passing our AboutSection component inside of it.
 * The HOC will return an enhanced component called About which can now use the functionalities
 * like props and incrementCount() that HOC has added
 * @type {{new(*=): NewEnhancedComponent}}
 */
const About = HOC( AboutSection );

// We finally export the enhanced Component 'About' that HOC has returned
export default About;