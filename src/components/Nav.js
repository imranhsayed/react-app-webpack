import React from 'react';

export default class Nav extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			nav: false
		}
	}

	static getDerivedStateFromProps( props, state ) {
		console.log( 'Child: getderived is called' );
		return state;
	}

	handleOnClick = () => {
		this.setState( { nav: ! this.state.nav } )
	}

	componentWillUnmount() {
		console.log( 'Child: Unmounted' );
	}
	render() {
		return (
			<div>
				I am Child: Nav
				<button onClick={this.handleOnClick}>Click Nav Button</button>
			</div>
		);
	}
}
