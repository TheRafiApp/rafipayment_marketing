// src/routes.js
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Layouts
import MainLayout from './components/_layout/main-layout'

// Pages
import Home from './components/Home'
import Help from './components/Help'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import NotFound from './components/NotFound'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-102507504-1')

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

export default (
  <BrowserRouter onUpdate={logPageView}>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/help" component={Help} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
)
