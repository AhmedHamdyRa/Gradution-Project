import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherDisplay.css';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Port Said');
  const API_KEY = 'f990d9cc2cb64beebed162137232406';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="weather-display" >

      <div className="inputt">
      <h3>Enter City Name:</h3>
      <br/>
      <input
        type="text"
        value={city}
        placeholder="Search By Loaction"
        onChange={handleCityChange}
        className="city-input"
      />
      </div>

      {weatherData ? (
        <div className="weather-info">
        <img
            src={weatherData.current.condition.icon}
            style={{ width: "100px", height:"100px" }}
            alt={'1'}
          />
          <p className="temperature">
            {weatherData.current.temp_c}°C
          </p>
          <p className="condition">
            {weatherData.current.condition.text}
          </p>
          <p>
          {weatherData.location.region},{weatherData.location.country},{weatherData.location.tz_id}
          </p>
          
        </div>
      ) : (
        <p className="loading">Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
