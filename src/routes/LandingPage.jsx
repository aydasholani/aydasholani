import React from 'react'
import Contact from './Contact'
import Skills from './Skills'
import Work from './Work'

export default function LandingPage() {
  return (
    <>
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
