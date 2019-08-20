import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './main.css';

import LandingPage from './components/LandingPage';


if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const routes = (
	<div>
		<Route exact path="/" component={LandingPage} />

 </div>
)


ReactDom.render(
	<Router>
		{routes}
	</Router>,
	document.getElementById('app'),

)
