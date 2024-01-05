import React from 'react'
import { NavLink } from 'react-router-dom'
import LightLogo from '../sholani-favicon-white.png'


export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <NavLink to='/'>
          <img src={LightLogo} alt='logo' width={60} className='logo-NavLink'/>
        </NavLink> 
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/test">Test page</NavLink>
      </div>
    </nav>
  )
}
