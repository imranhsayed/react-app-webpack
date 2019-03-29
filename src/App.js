import React from 'react';
import Loadable from 'react-loadable';

/**
 * The difference between import at the top and the one inside the Loadable() down below is that
 * the import statement at the top isn't a function invocation, its a module declaration. Its static and
 * you cannot use variable on top. So you can statically analyze your bundles. But the import() is a function.
 * So its dynamic and will split out About component into a separate component.
 */
const LoadableAbout = Loadable({
	loader: () => import( './components/About.js' )
});


class App extends React.Component {

	render() {
		return(
			<div>
				<h1>This is my React Component</h1>

			</div>
		);
	}
}

export default App