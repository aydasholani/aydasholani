import MyNavbar from './MyNavbar'
import { Container, Row, Col } from 'react-bootstrap'

export default function Header() {
  return (
    <Container fluid className='p-0 gx-0'>
      <MyNavbar />
        <header>
          <div className='d-flex align-items-center justify-content-end vh-100'>
            <Container >
              <Row className='text-center justify-content-center'>
                <Col xs md={{span: 6, offset: 6}} className='p-4 text-wrapper'>
                  <Col className='p-2'>
                    <h1>Ayda Sholani</h1>
                    <h3>- AI Developer & Frontend Developer</h3>
                  </Col>
                  <Col className='p-3'>
                    Hello!
                      I'm Ayda Sholani, a passionate frontend and AI developer from Stockholm, Sweden.
                      I learn quickly and think clearly—because the hardest challenges are usually the most rewarding to solve.
                  </Col> 
                </Col>
              </Row>
            </Container>
          </div>
        </header>
    </Container>
  )
}
