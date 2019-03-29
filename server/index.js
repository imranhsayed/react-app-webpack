import express from 'express';
import React from 'react';
// renderToString is going to take our node application and render it as html in string format
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import App from '../src/App';
import fs from 'fs';

const PORT = process.env.PORT || 3000;

// Read html dist/index.html which contains the production build file called main.js and convert it to string
const html = fs.readFileSync( 'dist/index.html' ).toString();

// Its going to split public/index.js into two parts in string format. One before the text 'not rendered' and the one after that.
const parts = html.split( 'not rendered' );

const app = express();

// This means that anytime anyone makes a request on '/dist' on our node server, it will look inside the dist directory and serve html from there.
app.use( '/dist', express.static( 'dist' ) );

// This will be run on every other request that does not hit the above ( app.use('/dist') ) request handler
app.use( ( req, res ) => {
	const reactMarkUp = (
		// ServerLocation will pass any url that's be hit on the browser so that App Component inside of it works correctly.
		<ServerLocation url={ req.url }>
			{/*Since we are using babble we can use jsx here*/}
			<App/>
		</ServerLocation>
	);

	res.send( `${ parts[0] } ${ renderToString( reactMarkUp )} ${ parts[1] }` );
	res.end();
} );

console.log( `listing on PORT ${ PORT }` );

app.listen( PORT );