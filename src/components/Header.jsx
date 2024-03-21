import ContactFormModal from '../routes/ContactFormModal'
import MyNavbar from './MyNavbar'
import { Container, Row, Col } from 'react-bootstrap'

export default function Header() {
  return (
    <Container fluid className='p-0 gx-0'>
      <MyNavbar />
        <header>
          <div className='d-flex align-items-center justify-content-end vh-100'>
            <Container >
              <Row noGutters className='text-center justify-content-center'>
                <Col xs md={{span: 6, offset: 6}} className='p-4 text-wrapper'>
                  <Col className='p-2'>
                    <h1>Ayda Sholani</h1>
                    <h3>- Frontend Developer/AI Developer Student</h3>
                  </Col>
                  <Col className='p-3'>
                    Hello there! 
                    I'm Ayda Sholani, 
                    a passionate frontend developer from Stockholm, Sweden, currently expanding my skills into AI development.
                  </Col>
                  <Col className='p-4'>
                    <ContactFormModal />
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>
        </header>
    </Container>
  )
}
