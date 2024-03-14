import React from 'react'

export default function Header() {
  return (
    <header>
      <div className='hero-image'>
        <div className="hero-text-wrapper">
          <div className="hero-text-container">
            <h1>Welcome to Sholani's World!</h1>
            <p>My name is Ayda, newly examined frontend developer and AI student based in Stockholm, Sweden. 
              Combining my love for coding with my passion for artificial intelligence, I specialize in creating intuitive web experiences while exploring the exciting world of AI. 
              Let's work together to build something amazing!
            </p>
            <button className='btn primary'>Contact me</button>
          </div>
        </div>
      </div>
    </header>
  )
}
