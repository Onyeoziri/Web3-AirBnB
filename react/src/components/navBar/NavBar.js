import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';



function NavBar() {
  return (
    <div className='navbar'>
      <h1>Welcome to AirBn3</h1>
      <nav>
        <Link to="/login" className='link'>Login</Link>
        <Link to="/wallet" className='link'>Wallet</Link>
        <Link to="/house" className='link'>Houses</Link>
      </nav>
    </div>
  )
}

export default NavBar
