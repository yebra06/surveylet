import React from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';

import SurveyList from './components/Surveys/SurveyList';
import SurveyCreate from "./components/Surveys/SurveyCreate";
import Home from "./components/Home";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <nav>
                            <Link to='/'>Home</Link>
                            <Link to='/create'>Create Survey</Link>
                            <Link to='/list'>Take Survey</Link>
                        </nav>
                        <Route exact path='/' component={Home} />
                        <Route path='/create' component={SurveyCreate} />
                        <Route path='/list' component={SurveyList} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
