import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">STRANGER THINGS</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/episodes">Episodes</Link></li>
        <li><Link to="/upsidedown">Upside Down</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
