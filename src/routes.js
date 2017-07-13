// src/routes.js
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-102507504-1')

// Layouts
import MainLayout from './components/_layout/main-layout'

// Pages
import Home from './components/Home'
import Help from './components/Help'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import NotFound from './components/NotFound'

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

export default (
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="help" component={Help}></Route>
      <Route path="terms" component={Terms}></Route>
      <Route path="privacy" component={Privacy}></Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)
