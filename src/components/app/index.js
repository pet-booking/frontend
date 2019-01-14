import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Pet from '../pet'
import Profile from '../profile'
import SignIn from '../sign-in'
import SignUp from '../sign-up'

const App = () => (
  <Router>
    <div>
      <h1>hello world</h1>
      <Pet />
      <Profile />
      <SignIn />
      <SignUp />
    </div>
  </Router>
)

export default App
