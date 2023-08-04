import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
    <h1>Learn code</h1>
    <ul>
      <li>
        <NavLink to="/" end>Home</NavLink>
      </li>
      <li>
        <NavLink to="location">Location</NavLink>
      </li>
      <li>
      <NavLink to="lazy">Lazy</NavLink>
      </li>

    </ul>
  </div>
  )
}

export default Header