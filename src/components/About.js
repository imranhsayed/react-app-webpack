import React from 'react';
import { ChildComponent } from "./ChildComponent";

class About extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			countVal: 1
		};
	}

	componentDidMount() {

		setInterval(  () => {
			this.setState( { countVal: 1  } )
		}, 3000 )
	}


	render() {

		return(
			<div>
				This is About: Parent Component
			<ChildComponent countVal={this.state.countVal}/>
			</div>
		);
	}
}

export default About;
