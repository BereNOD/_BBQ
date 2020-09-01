import * as React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"

import About from './pages/About'
import Users from './pages/Users'
import Home from './pages/Home'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router