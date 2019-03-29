import React from 'react';

/**
 * HOC is a Higher Order Component that we create, which takes Original Component as its param
 * and returns a New Enhanced Component conditionally
 * At the time of importing the HOC and using it , If we pass loading as true
 * it will return 'Loading..', AboutSection component otherwise.
 * @param props
 * @return {function(*)}
 * @constructor
 */
const HOC = ( props ) => ( OriginalComponent ) => {
	return class NewEnhancedComponent extends React.Component {
		render() {
			return(
				<div>
					{ props.loading ? <h2>Loading...</h2> : <OriginalComponent/> }
				</div>
			)
		}
	}
};

export default HOC;