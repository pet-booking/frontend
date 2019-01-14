import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Pet from '../pet'
import Nav from '../nav'
import Home from '../home'
import Profile from '../profile'
import SignIn from '../signin'
import SignUp from '../signup'
import FourOhFour from '../four-oh-four'

const App = () => (
  <Router>
    <div>
      <h1>hello world</h1>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pet" component={Pet} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
)

export default App
