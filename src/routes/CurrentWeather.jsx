import { useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import FetchWeatherData from "../components/Weather/FetchWeatherData";
import WeatherCard from "../components/Weather/WeatherCard";

export default function CurrentWeather() {
  const [data, setData] = useState(null);

  console.log(data)
  return (
    <section className=' 100vh'>
      <Container>
        <h2>Current weather</h2>
        <Row className="mt-2 g-4 d-flex align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <FetchWeatherData
              setData={setData}
            />
          </Col>
          <Col xs={12} md={12}>
            <WeatherCard
              data={data}
            />
          </Col>
        </Row>
      </Container>
    
    </section>
  )
}
