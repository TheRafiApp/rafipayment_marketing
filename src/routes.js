// src/routes.js
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/_layout/main-layout';

// Pages
import Home from './components/Home';
import Help from './components/Help';
import NotFound from './components/NotFound';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="help" component={Help}></Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
