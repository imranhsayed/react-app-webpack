import React from 'react';
import HOC from './HOC';

class AboutSection extends React.Component {

	render() {
		return(
			<div>
				This is About
			</div>
		);
	}
}
/**
 * We are importing the HOC and passing our AboutSection component inside of it.
 * The HOC will return an enhanced component called About
 * If we pass loading as true it will return 'Loading..', AboutSection component otherwise.
 * @type {{new(*=): NewEnhancedComponent}}
 */
const About = HOC( { loading: true } )( AboutSection );

// We finally export the enhanced Component 'About' that HOC has returned
export default About;