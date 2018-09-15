import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Home from './home';
import About from './about';
import Contact from './contact';
import PageNotFound from './common/components/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route component={PageNotFound} />
  </Switch>
);