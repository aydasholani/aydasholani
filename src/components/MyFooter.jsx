import SmallLogo from '../assets/small-logo.svg'
import { Container, Row, Col } from "react-bootstrap";

export default function MyFooter() {
  return (
    <Container fluid className="p-4 text-center justify-content-center align-content-center">
      <Row className="text-center">
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