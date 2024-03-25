import { useState } from 'react';
import ContactFormModal from '../routes/ContactFormModal'
import MyNavbar from './MyNavbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Header() {
  const [modalShow, setModalShow] = useState(false);

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
                  <Button variant="outline-primary" size="lg" onClick={() => setModalShow(true)}>
                      Contact me!
                  </Button>
                    <ContactFormModal 
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>
        </header>
    </Container>
  )
}
