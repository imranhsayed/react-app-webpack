import React from 'react';

export const HOC = ( props ) => ( MyComponent ) => {
	return class HOC extends React.Component {
		render() {
			return(
				<div>
					{ ! props.ready ? <h1>Loading...</h1> : <MyComponent/> }
				</div>
			)
		}
	}
};