import React from 'react'
import { Link } from 'react-router-dom'
import LightLogo from '../sholani-favicon-white.png'


export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <Link to='/'>
          <img src={LightLogo} alt='logo' width={60} className='logo-link'/>
        </Link> 
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/test">Test page</Link>
      </div>
    </nav>
  )
}
