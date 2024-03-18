
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

        <section id='projects'>
          <Projects />
        </section>

        <section id='hobbies'>
          <Hobbies />
        </section>
      </main>
    </>
  )
}
