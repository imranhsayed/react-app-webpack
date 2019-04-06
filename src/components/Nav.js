import React from 'react';

export default class Nav extends React.Component {
	componentWillUnmount() {
		console.log( 'I unmounted' );
	}
	render() {
		return (
			<div>I am Nav</div>
		);
	}
}
