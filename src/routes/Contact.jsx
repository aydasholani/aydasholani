import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Contact() {
  return (
    <Container fluid 
      className="p-4 text-center justify-content-center align-content-center contact-wrapper"
      id="contact"  
    >
      <h2>Contact me</h2>
      <Row>
        <Col className="p-4 text-center">
          <Nav className="text-center justify-content-center align-content-center">
            <Nav.Item aria-label="Call" className="contact-nav-link">
              <Nav.Link href="tel:+46707479001">
                <IoIosCall size={18} /> +46707479001
              </Nav.Link>
            </Nav.Item>

            <Nav.Item aria-label="Email" className="contact-nav-link">
              <Nav.Link href="mailto:ayda.sholani@gmail.com" >
                <IoIosMail size={18}/> ayda.sholani@gmail.com
              </Nav.Link>
            </Nav.Item>
            <Nav.Item aria-label="LinkedIn" className="contact-nav-link">
            <Nav.Link href="https://www.linkedin.com/in/ayda-sholani/" target='_blank'>
                <AiOutlineLinkedin size={18}/> LinkedIn
            </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}
