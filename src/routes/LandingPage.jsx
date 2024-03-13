import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import Hobbies from './Hobbies'

export default function LandingPage() {
  return (
    <>
      <main>
        <section id='skills'>
          <Skills />
        </section>

        <div className="divider"></div>

        <section id='projects'>
          <Projects />
        </section>

        <div className="divider"></div>

        <section id='contact'>
          <Contact />
        </section>

        <div className="divider"></div>

        <section id='hobbies'>
          <Hobbies />
        </section>
      </main>
    </>
  )
}
