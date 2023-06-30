import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./weather.css";
const WEATHER_API_KEY = '77dd1b5e5014ecbf9db74d7aafa07c87';
const GEOCODE_API_KEY = '30074d123ec24ced80606d278ce7ca9b';
const CACHE_KEY = 'weatherDataCache';
const SEARCHES_KEY = 'searches';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initializeLocations();
    getLocationWeather();
  }, []);

  const initializeLocations = () => {
    const storedSearches = localStorage.getItem(SEARCHES_KEY);
    if (storedSearches) {
      const searches = JSON.parse(storedSearches);
      setLocations(searches);
    }
  };

  const updateLocations = (search) => {
    const storedSearches = localStorage.getItem(SEARCHES_KEY);
    let searches = [];
    if (storedSearches) {
      searches = JSON.parse(storedSearches);
      searches.push(search);
    } else {
      searches.push(search);
    }
    localStorage.setItem(SEARCHES_KEY, JSON.stringify(searches));
    setLocations(searches);
  };

  const getLocationWeather = async () => {
    setIsLoading(true);
    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${WEATHER_API_KEY}`
      );
      const weatherData = response.data;

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${WEATHER_API_KEY}`
      );
      const forecastData = forecastResponse.data;

      setCoordinates({ lat: latitude, lng: longitude });
      setWeatherData(weatherData);
      setForecastData(forecastData);
      updateLocations(weatherData.name);
    } catch (error) {
      console.error('Error fetching location weather:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const cacheData = localStorage.getItem(CACHE_KEY);
      let cache = {};
      if (cacheData) {
        cache = JSON.parse(cacheData);
      }

      if (cache[location]) {
        const { lat, lng } = cache[location];
        setCoordinates({ lat, lng });
        setWeatherData(cache[location].weatherData);
        setForecastData(cache[location].forecastData);
      } else {
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${GEOCODE_API_KEY}`
        );
        const { lat, lng } = response.data.results[0].geometry;
        setCoordinates({ lat, lng });

        const weatherDataResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${WEATHER_API_KEY}`
        );
        const weatherData = weatherDataResponse.data;

        const forecastDataResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=imperial&appid=${WEATHER_API_KEY}`
        );
        const forecastData = forecastDataResponse.data;

        cache[location] = { lat, lng, weatherData, forecastData };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));

        setWeatherData(weatherData);
        setForecastData(forecastData);
        updateLocations(location);
      }
    } catch (error) {
      console.error('Error searching location:', error);
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="form">
        <label className="label" htmlFor="locationInput">
          Enter Location:
        </label>
        <div className="input-container">
          <input
            className="input"
            id="locationInput"
            type="text"
            value={location}
            onChange={handleLocationChange}
          />
          <button className="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {coordinates && (
            <div className="coordinates">
              <h2>Coordinates for {location}</h2>
              <p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lng}</p>
            </div>
          )}
          {weatherData && (
            <div className="weather-summary">
              <h2>Current Weather for {location}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Longitude</th>
                    <th>Latitude</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Weather Description</th>
                    <th>Wind Speed</th>
                    <th>Cloudiness</th>
                    <th>Sunrise</th>
                    <th>Sunset</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{coordinates.lng}</td>
                    <td>{coordinates.lat}</td>
                    <td>{weatherData.main.temp}F</td>
                    <td>{weatherData.main.humidity}%</td>
                    <td>{weatherData.weather[0].description}</td>
                    <td>{weatherData.wind.speed} mph</td>
                    <td>{weatherData.clouds.all}%</td>
                    <td>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</td>
                    <td>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {forecastData && (
            <div className="forecast">
              <h2>5-Day Forecast for {location}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Date/Time</th>
                    <th>Temperature</th>
                    <th>Weather Description</th>
                  </tr>
                </thead>
                <tbody>
                  {forecastData.list.map((forecast) => (
                    <tr key={forecast.dt}>
                      <td>{new Date(forecast.dt * 1000).toLocaleString()}</td>
                      <td>{forecast.main.temp}F</td>
                      <td>{forecast.weather[0].description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherApp;
