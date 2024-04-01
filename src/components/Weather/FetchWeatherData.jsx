import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function FetchWeatherData(props) {
  const [lon, setLon] = useState(18.0686);
  const [lat, setLat] = useState(59.3293);

  const WEATHER_API_KEY = "4c3ba0cf677b6f8dd847951bdf500141";

  const fetchData = async () => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather/?appid=${WEATHER_API_KEY}&limit=5&units=metric&lon=${lon}&lat=${lat}`;

    console.log(WEATHER_API_URL);

    try {
      const weatherResponse = await fetch(WEATHER_API_URL);
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
      });

      console.log(weatherData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = async () => {
    await fetchData();
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={handleClick} className='mt-2'>
        Get weather in Stockholm
      </Button>
    </div>
  );
}
