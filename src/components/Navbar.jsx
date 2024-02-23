import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>        
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/work">work</Link>
      <Link to="/contact">contact</Link>
    </div>
  )
}
