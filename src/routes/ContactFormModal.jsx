import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { Modal, Button, Container, Row, Col, CloseButton} from "react-bootstrap"
import ContactForm from "./ContactForm";

export default function ContactModal(props) {
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen="md-down"
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter"><IoIosMail size={25}/> ayda.sholani@gmail.com</Modal.Title>
        <CloseButton onClick={props.onHide} data-bs-theme="dark" className='bg-light p-2'/>
      </Modal.Header>

      <Modal.Body>
        <Container data-bs-theme="dark">
          <Row justify-content-center align-content-center>
            <Col sm={4} className="justify-content-center d-flex align-content-center align-items-center"> 
              <div className="round-avatar"></div>
            </Col>
            <Col className="p-2" >
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button 
          href="tel:+46707479001"
          variant="outline-secondary"
          size="sm"
        >
            <IoIosCall size={18} /> +46707479001
        </Button>
      </Modal.Footer>
    </Modal>    
  )
}
