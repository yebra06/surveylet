import React, { Component } from 'react';

import Nav from './components/Nav';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Nav />
            </div>
        );
    }
}

export default App;