import './styles/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Link, Route } from 'react-router-dom';

import App from './App';
import Survey from "./components/Surveys/Survey";
import SurveyCreate from "./components/Surveys/SurveyCreate";

render(
    <BrowserRouter>
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/create'>Create Survey</Link>
            </nav>
            <Route exact path='/' component={App} />
            <Route path='/create' component={SurveyCreate} />
            <Route path='/survey/:id' component={Survey} />
        </div>
    </BrowserRouter>,
    document.getElementById('app')
);
