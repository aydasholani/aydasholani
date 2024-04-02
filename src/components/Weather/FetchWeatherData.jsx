import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function FetchWeatherData({ setData }) {
  const [isFetching, setIsFetching] = useState(false);
  const [lon, setLon] = useState(18.0686);
  const [lat, setLat] = useState(59.3293);

  const WEATHER_API_KEY = "4c3ba0cf677b6f8dd847951bdf500141";

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      try {
        const weatherData = await fetchWeatherData(lat, lon);
        setData(weatherData);
      } catch (error) {
        console.error('Error fetching default weather data:', error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = async () => {
    setIsFetching(true);

    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      const weatherData = await fetchWeatherData(latitude, longitude);

      setData(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => resolve(position),
          error => reject(error)
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  const fetchWeatherData = async (latitude, longitude) => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather/?appid=${WEATHER_API_KEY}&limit=5&units=metric&lon=${longitude}&lat=${latitude}`;

    console.log(WEATHER_API_URL);

    try {
      const response = await fetch(WEATHER_API_URL);
      const data = await response.json();

      if (data.cod === '404') {
        throw new Error('Weather data not found.');
      }

      return {
        name: data.name,
        temp: Math.ceil(data.main.temp),
        feelsLike: Math.ceil(data.main.feels_like),
        description: data.weather[0].description,
        main: data.weather[0].main,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      };
    } catch (error) {
      throw new Error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={handleClick} disabled={isFetching}>
        {isFetching ? 'Fetching...' : 'Get weather in your location'}
      </Button>
    </div>
  );
}
