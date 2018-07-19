import './styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Create from './components/Surveys/Create';

render(
	<BrowserRouter>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/create' component={Create} />
		</div>
	</BrowserRouter>,
	document.getElementById('app')
);
