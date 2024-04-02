import { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY || "4c3ba0cf677b6f8dd847951bdf500141";

export default function FetchWeatherData({ setData }) {
  const [isFetching, setIsFetching] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const position = await getCurrentPosition();
        const weatherData = await fetchWeatherData(position.coords.latitude, position.coords.longitude);
        setData(weatherData);
        setMessage('');
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setMessage('Failed to fetch weather data. Please try again later.');
      } finally {
        setIsFetching(false);
      }
    };
  
    fetchData();
  }, [setData]);

  const handleClick = async () => {
    setIsFetching(true);
    try {
      const position = await getCurrentPosition();
      const weatherData = await fetchWeatherData(position.coords.latitude, position.coords.longitude);
      setData(weatherData);
      setMessage('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setMessage('Failed to fetch weather data. Please try again later.');
    } finally {
      setIsFetching(false);
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            console.log('Position:', position);
            resolve(position);
          },
          error => {
            setMessage('You must accept geolocation to fetch your weather data');
            reject(error);
          }
        );
      } else {
        setMessage('Geolocation is not supported by this browser.');
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  const fetchWeatherData = async (latitude, longitude) => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather/?appid=${WEATHER_API_KEY}&limit=5&units=metric&lon=${longitude}&lat=${latitude}`;

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
        {isFetching ? <Spinner animation="border" size="sm" /> : 'Get weather in your location'}
      </Button>
      {message && <p className="text-danger">{message}</p>}
    </div>
  );
}
