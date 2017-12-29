import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Construction from './components/Construction';
import './main.css';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={LandingPage} />
		<Route path="/contact" component={Contact} />
		<Route path="/resume" component={Resume} />
		<Route path="/portfolio" component={Portfolio} />
		<Route path="/about" component={About} />
		<Route path="/littleerror" component={Construction} />
	</Route>
)

ReactDom.render(
	<Router history={hashHistory}>
		{routes}
	</Router>,
	document.getElementById('app')
)
