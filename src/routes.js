// src/routes.js
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import analyticsWrap from './components/analyticsWrap'

// Layouts
import MainLayout from './components/_layout/main-layout'

// Pages
import Home from './components/Home'
import About from './components/About'
import Help from './components/Help'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import NotFound from './components/NotFound'

export default (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={analyticsWrap(Home)} />
        <Route path="/about" component={analyticsWrap(About)} />
        <Route path="/help" component={analyticsWrap(Help)} />
        <Route path="/terms" component={analyticsWrap(Terms)} />
        <Route path="/privacy" component={analyticsWrap(Privacy)} />
        <Route component={analyticsWrap(NotFound)} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
)
