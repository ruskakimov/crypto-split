import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/split">Split</Link></li>
        <li><Link to="/combine">Combine</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar