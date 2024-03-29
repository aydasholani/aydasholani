import { useState, useEffect } from 'react';
import { Form, FloatingLabel, Button, Row, Col, Spinner, Placeholder, Card } from 'react-bootstrap';
import WeatherLoadingCard from './Weather/WeatherLoadingCard';
import WeatherCard from './Weather/WeatherCard';

export default function Weather_API() {
  const WEATHER_API_KEY = "e3b20c293593a4661b29c109d5474bd7";
  const PIXABAY_API_KEY = "43101109-b0f6061b60ccce2b493ca8e43";

  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather/?appid=${WEATHER_API_KEY}`;
  const PIXABAY_API_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}`;
  
  const [city, setCity] = useState("");
  const [cityImgUrl, setCityImgUrl] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (weatherData && cityImgUrl) {
      setDataLoaded(true);
    }
  }, [weatherData, cityImgUrl]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setWeatherData(null)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      const [weatherResponse, imageResponse] = await Promise.all([
        fetchWeatherData(),
        fetchImage()
      ]);

      const weatherData = await weatherResponse.json();
      const imageData = await imageResponse.json();
      if (weatherData.cod === '404') {
        setDataLoaded(false);
        return;
      }
      setWeatherData(weatherData);
      setCityImgUrl(imageData.hits[0].webformatURL); 


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchWeatherData = () => {
    const url = `${WEATHER_API_URL}&q=${city}&units=metric&lang=en`;
    console.log(url)
    return fetch(url);
  };

  const fetchImage = () => {
    const url = `${PIXABAY_API_URL}&q=${city}&image_type=photo`;
    console.log(url)
    return fetch(url);
  };

  return (
    <Row className='100vh mt-4 text-center'>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Row xs={6}>
            <Col xs={7}>
              <FloatingLabel controlId="floatingEnterCity" label="Enter City" className='mb-2'>
                <Form.Control 
                  type="text" 
                  value={city} 
                  onChange={handleCityChange} 
                  placeholder="Enter City"
                  />
              </FloatingLabel>
            </Col>

            <Col xs="auto">
              <Button variant="outline-primary"  type="submit" aria-label="Email to ayda.sholani@gmail.com" className='mt-2' >
                Submit
              </Button>  
            </Col>
          </Row>
        </Form>
      </Col>

      <Col xs={12}>
        <Row className="text-center">
          {dataLoaded && weatherData && cityImgUrl ? 
            <WeatherCard weatherData={weatherData} cityImgUrl={cityImgUrl} />
              : 
            <WeatherLoadingCard /> 
          }
        </Row>
      </Col>
    </Row>
  );
}
