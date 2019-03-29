import React from 'react';
import { HOC } from './HOC';

class AboutSection extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			count: 0
		}
	}

	incrementCount = ( event ) => {
		this.setState( prevState => ( { count: prevState.count + 1 } ) );
	};

	render() {

		const { count } = this.state;

		return(
			<div>
				This is About
				<h2 onClick={ this.incrementCount }>Clicked { count } times</h2>
			</div>
		);
	}
}

const About = HOC( { ready: true } )( AboutSection );
export default About;