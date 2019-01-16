import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/pet">Pet</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/signup">SignUp</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
)

export default Nav
