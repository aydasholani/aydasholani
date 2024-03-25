import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { Modal, Button, Container, Row, Col} from "react-bootstrap"
import { Link } from "react-router-dom";
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
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
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
        <Link href="tel:+46707479001"><IoIosCall size={18} /> +46707479001</Link>
      </Modal.Footer>
    </Modal>    
  )
}
