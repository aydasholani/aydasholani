import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';


export default function FetchWeatherData(props) {
  // const PIXABAY_API_KEY = "43101109-b0f6061b60ccce2b493ca8e43";
  // const PIXABAY_API_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}`;
  const [lon, setLon] = useState(18.0686);
  const [lat, setLat] = useState(59.3293);
  
  const WEATHER_API_KEY = "e3b20c293593a4661b29c109d5474bd7";
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather/?appid=${WEATHER_API_KEY}&lon=${lon}&lat=${lat}&limit=5&units=metric`;

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        error => {
          console.error('Error getting geolocation:', error.message);
          setLat(59.3293);
          setLon(18.0686);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    getCurrentPosition()
  }
  
  const fetchData = async () => {
    console.log(WEATHER_API_URL)
    try {
      const weatherResponse = await fetch(WEATHER_API_URL)
      
      const weatherData = await weatherResponse.json();
      
      if (weatherData.cod === '404') {
        props.setDataLoaded(false);
        return;
      }
      
      props.setData({
        name: weatherData.name,
        temp: Math.ceil(weatherData.main.temp),
        feelsLike: Math.ceil(weatherData.main.feels_like),
        description: weatherData.weather[0].description,
        main: weatherData.weather[0].main,
        icon: `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
      })
      console.log(weatherData)
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // });

  return (
    <div>
    <Form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center'>
      <Row xs={6}>
        <Col xs="auto">
          <Button variant="outline-primary" type="submit" className='mt-2'>
            Get weather in your location
          </Button>  
        </Col>
      </Row>
    </Form>
  </div>
  )
}
