import React from 'react'
import { Link } from 'react-router-dom'
import DarkLogo from '../sholani-favicon-black.png'
import { Image } from 'react-bootstrap'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>
        <img src={DarkLogo} alt='logo' width={60} />
      </Link> 
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}
