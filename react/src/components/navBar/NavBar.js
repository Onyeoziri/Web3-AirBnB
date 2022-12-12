import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/wallet">Wallet</Link>
      <Link to="/house">Houses</Link>
    </nav>
  )
}

export default NavBar
