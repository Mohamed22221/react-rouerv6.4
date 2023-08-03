import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
    <h1>Learn code</h1>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="faq">faq</Link>
      </li>
      <li>
      <Link to="contact">contact</Link>
      </li>

    </ul>
  </div>
  )
}

export default Header