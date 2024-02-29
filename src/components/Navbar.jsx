import React from 'react'
import { Link } from "react-router-dom"
import logo from '../logo2.png'
import SocialsIcons from '../icons/SocialsIcons'

export default function Navbar() {
  return (
    <nav>
      <div>
      <Link>
        <img src={logo} alt="logo" height={50} />
      </Link>
      </div>

      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/work">work</Link>
        <Link to="/contact">contact</Link>
      </div>

      <SocialsIcons />

    </nav>
  )
}
