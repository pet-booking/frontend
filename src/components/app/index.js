import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Pet from '../pet'
import Nav from '../nav'
import Home from '../home'
import Profile from '../profile'
import SignIn from '../signin'
import SignUp from '../signup'

const App = () => (
  <Router>
    <div>
      <h1>hello world</h1>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/pet" component={Pet} />
      <Route path="/profile" component={Profile} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>
)

export default App
