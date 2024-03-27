import { useState } from 'react';
import SmallLogo from '../assets/small-logo.svg'
import { Container, Row, Col, Button } from "react-bootstrap";
import ContactFormModal from '../routes/ContactFormModal'

export default function MyFooter() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container fluid className="p-4 text-center justify-content-center align-content-center">
      <Row className="text-center" >
        <Col className='p-4 mb-4' id='contact'>
          <Button variant="outline-primary" size="lg" onClick={() => setModalShow(true)} className='mt-4'>
            Contact Me!
          </Button>
          
          <ContactFormModal 
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>

        <Col xs={12} >
          <h2>[ Thanks For Scrolling ]</h2>
        </Col>
        <Col xs={12} className="p-4">
          <svg className="small-logo">
            <use xlinkHref={`${SmallLogo}#small-logo`}></use>
          </svg>
        </Col>
        <Col className="p-2">
          <p>&copy; 2024 Ayda Sholani. All rights reserved.</p>
        </Col>
    
      </Row>
    </Container>
  );
}