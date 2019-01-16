import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Pet from '../pet'
import Nav from '../nav'
import Home from '../home'
import Profile from '../profile'
import LogIn from '../login'
import SignUp from '../signup'
import FourOhFour from '../four-oh-four'
import Appointment from '../appointment'
import Client from '../client'
import ClientList from '../client-list'
import RequestVisit from '../request-visit'
import Sitter from '../sitter'

const App = () => (
  <Router>
    <div>
      <h1>hello world</h1>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pet" component={Pet} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/clientlist" component={ClientList} />
        <Route exact path="/requestvisit" component={RequestVisit} />
        <Route exact path="/sitter" component={Sitter} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
)

export default App
