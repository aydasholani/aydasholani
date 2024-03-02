import React from 'react'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import Work from './Work'

export default function Home() {
  return (
    <>
      <section id='about'>
        <About />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='work'>
        <Work />
      </section>

      <section id='contact'>
        <Contact />
      </section>
    </>
  )
}
