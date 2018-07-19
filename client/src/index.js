import './styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Create from './components/Surveys/Create';
import Home from './components/Home';

render(
	<BrowserRouter>
		<div>
            <Nav />
			<Route exact path='/' component={Home} />
			<Route path='/create' component={Create} />
		</div>
	</BrowserRouter>,
	document.getElementById('app')
);
