import React, { useState } from 'react';

export default function Weather_API() {
  const WEATHER_API_KEY = "e3b20c293593a4661b29c109d5474bd7";
  const PIXABAY_API_KEY = "43101109-b0f6061b60ccce2b493ca8e43";

  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather/?appid=${WEATHER_API_KEY}`;
  const PIXABAY_API_URL = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}`;

  const [city, setCity] = useState("");
  const [cityImgUrl, setCityImgUrl] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
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

      console.log(weatherData);
      console.log(imageData);

      // Update state with weather data and city image URL
      setWeatherData(weatherData);
      setCityImgUrl(imageData.hits[0].webformatURL); // Assuming you want the first image
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchWeatherData = () => {
    const url = `${WEATHER_API_URL}&q=${city}&units=metric&lang=en`;
    return fetch(url);
  };

  const fetchImage = () => {
    const url = `${PIXABAY_API_URL}&q=${city}&image_type=photo`;
    return fetch(url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter city:
          <input type="text" value={city} onChange={handleCityChange} />
        </label>
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {Math.ceil(weatherData.main.temp)}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}

      {cityImgUrl && (
        <div>
          <img src={cityImgUrl} alt="City" />
        </div>
      )}
    </div>
  );
}
