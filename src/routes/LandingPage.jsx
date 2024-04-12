import { Container, Row, Col } from 'react-bootstrap';

import Skills from './Skills'
import Projects from './Projects'
import Testimonials from './Testimonials';


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
      </Row>
    </Container>

  )
}
