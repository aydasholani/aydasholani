
import Skills from './Skills'
import Projects from './Projects'
import Hobbies from './Hobbies'
import Testimonials from './Testimonials';
import { Container, Row, Col } from 'react-bootstrap';

export default function LandingPage() {
  return (
    <Container fluid className='main-content p-0 gx-0'>
        <Row>
          <Col xs={12} id="skills" className='p-5'>
            <Skills />
          </Col>

          <Col xs={12} id="projects" className='p-5'>
            <Projects />
          </Col>

          <Col xs={12} id="testimonials" className='p-5'>
            <Testimonials />
          </Col>

          <Col xs={12} id="hobbies" className='p-5'>
            <Hobbies className="section-wrapper" />
          </Col>
        </Row>
    </Container>

  )
}
