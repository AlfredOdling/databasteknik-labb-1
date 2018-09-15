import React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
import AppLoader from './common/components/AppLoader';

// Import modules/routes
import About from './about';
import Contact from './Contact';
import PageNotFound from './common/components/PageNotFound';

// Code splitting with dynamic import
// https://reactjs.org/docs/code-splitting.html
const Home = Loadable({
	loader: () => import('./home'),
	loading: AppLoader
});


export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
		<Route path="*" component={PageNotFound} />
	</Switch>
);
