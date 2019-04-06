import React from 'react';
import About from './About';

class Contact extends React.Component {
    constructor( props ) {
        super( props );

        const name = 2;
        name.toUpperCaser();
    }

    render() {
        return(
            <div>
                This is Contact page
                <About/>
            </div>
        );
    }
}

export default Contact;