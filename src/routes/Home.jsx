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

      <div class="divider"></div>

      <section id='skills'>
        <Skills />
      </section>

      <div class="divider"></div>

      <section id='work'>
        <Work />
      </section>

      <div class="divider"></div>

      <section id='contact'>
        <Contact />
      </section>
    </>
  )
}
