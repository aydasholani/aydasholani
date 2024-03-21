import { Container } from 'react-bootstrap'
import MyProjects from '../components/MyProjects'

export default function Projects() {
  return (
    <section className='d-flex align-items-center justify-content-center 100vh'>
      <Container className="p-4">
        <h2>Projects</h2>
        <MyProjects />
      </Container>
    </section>
  )
}
