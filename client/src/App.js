import React from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';

import Create from "./components/Surveys/Create";
import Home from "./components/Home";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <nav>
                            <Link to='/'>Home</Link>
                            <Link to='/create'>Create</Link>
                        </nav>
                        <Route exact path='/' component={Home} />
                        <Route path='/create' component={Create} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
