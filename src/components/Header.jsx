import React from 'react'
import ContactFormModal from '../routes/ContactFormModal'
import MyNavbar from './MyNavbar'

export default function Header() {
  return (
<>

    <header>
      <MyNavbar />
      <div className='hero-image'>
        <div className="hero-text-wrapper">
          <div className="hero-text-container">
            <h1>Welcome to Sholani's World!</h1>
            <p>My name is Ayda, newly examined frontend developer and AI student based in Stockholm, Sweden. 
              Combining my love for coding with my passion for artificial intelligence, I specialize in creating intuitive web experiences while exploring the exciting world of AI. 
              Let's work together to build something amazing!
            </p>
            <ContactFormModal />
          </div>
        </div>
      </div>
    </header>
</>
  )
}
