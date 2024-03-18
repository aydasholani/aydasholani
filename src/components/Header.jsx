import React from 'react'
import { Button } from 'react-bootstrap'
export default function Header() {
  return (
    <header className='container-fluid'>
      <div className='hero-image'>
        <div className="hero-text-wrapper">
          <div className="hero-text-container">
            <h1>Welcome to Sholani's World!</h1>
            <p>My name is Ayda, newly examined frontend developer and AI student based in Stockholm, Sweden. 
              Combining my love for coding with my passion for artificial intelligence, I specialize in creating intuitive web experiences while exploring the exciting world of AI. 
              Let's work together to build something amazing!
            </p>
            <Button>bootstrap</Button>
            <button className='btn primary'>Contact me</button>
          </div>
        </div>
      </div>
    </header>
  )
}
