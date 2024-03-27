import Weather_API from "../components/Weather_API"
import { Container, Row, Col} from "react-bootstrap";

export default function CurrentWeather() {
  return (
    <section className='d-flex align-items-center justify-content-center 100vh'>
      <Container>
        <h2>Current weather</h2>
        <Row className="mt-2 g-4">
          <Weather_API />
        </Row>
      </Container>
    
    </section>
  )
}
