import React from 'react';
import {menuData} from './menu-data';

class Home extends React.Component {


	render() {
		return(
			<React.Fragment>
				{menuData.map( ( item, index ) => {
					const count = index + 1;
					const element = [];
					const canIncludeUl = ( ( 1 === count ) || ( 1 === ( count % 3) ) );

					if ( canIncludeUl ) {
						console.log( 'opening tag', count );
						// element.push( <ul>   );

							}

							element.push( <li>{item.label}</li> );

							if ( 1 !== count && ( 0 === ( count % 3 )  )) {
							console.log( 'closing tag', count );
								// element.push( </ul> )

							}


					console.log( element );
								return element;
				} )}
			</React.Fragment>
		)
	}
}

export default Home;
