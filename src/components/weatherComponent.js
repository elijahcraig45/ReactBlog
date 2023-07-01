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
  const [cityName, setCityName] = useState('');

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


  function mapIdToIcon(id) {
    const iconMap = {
      // Thunderstorm
      200: '11d',
      201: '11d',
      202: '11d',
      210: '11d',
      211: '11d',
      212: '11d',
      221: '11d',
      230: '11d',
      231: '11d',
      232: '11d',
  
      // Drizzle
      300: '09d',
      301: '09d',
      302: '09d',
      310: '09d',
      311: '09d',
      312: '09d',
      313: '09d',
      314: '09d',
      321: '09d',
  
      // Rain
      500: '10d',
      501: '10d',
      502: '10d',
      503: '10d',
      504: '10d',
      511: '13d',
      520: '09d',
      521: '09d',
      522: '09d',
      531: '09d',
  
      // Snow
      600: '13d',
      601: '13d',
      602: '13d',
      611: '13d',
      612: '13d',
      613: '13d',
      615: '13d',
      616: '13d',
      620: '13d',
      621: '13d',
       622: '13d',
  
      // Atmosphere
      701: '50d',
      711: '50d',
      721: '50d',
      731: '50d',
      741: '50d',
      751: '50d',
      761: '50d',
      762: '50d',
      771: '50d',
      781: '50d',
  
      // Clear
      800: '01d',
  
      // Clouds
      801: '02d',
      802: '03d',
      803: '04d',
      804: '04d'
    };
  
    const icon = iconMap[id];
    if (icon) {
      return `https://openweathermap.org/img/wn/${icon}.png`;
    } else {
      return 'Invalid ID';
    }
  }
  
  
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

      const geocodeResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${GEOCODE_API_KEY}`
      );
      const city = geocodeResponse.data.results[0].components.county;
      setCityName(city);

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
      updateLocations(city);
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
        const city = response.data.results[0].components.county;
        setCityName(city);

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

    const ForecastCarousel = () => {
    const [currentDay, setCurrentDay] = useState(0);
  
    const handlePreviousDay = () => {
      if (currentDay > 0) {
        setCurrentDay(currentDay - 1);
      }
    };
  
    const handleNextDay = () => {
      if (currentDay < forecastData.list.length - 1) {
        setCurrentDay(currentDay + 1);
      }
    };
  
    const getForecastsForCurrentDay = () => {
      const currentDayForecasts = forecastData.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt);
        return forecastDate.getDate() === currentDay + 1;
      });
    
      if (currentDayForecasts.length > 0) {
        return currentDayForecasts.map((forecast) => (
          <div key={forecast.dt} className="carousel-slide">
            <div className="carousel-content">
              <div className="carousel-day">{forecast.dt_txt.substring(0, 10)}</div>
              <div className="carousel-day">{forecast.dt_txt.substring(10)}</div>
              <div className="carousel-icon">
                <img src={mapIdToIcon(forecast.weather[0].id)} alt="Weather Icon" />
              </div>
              <div className="carousel-description">{forecast.weather[0].description}</div>
            </div>
          </div>
        ));
      } else {
        const nextDayForecasts = forecastData.list.filter((forecast) => {
          const forecastDate = new Date(forecast.dt_txt);
          return forecastDate.getDate() === currentDay + 2;
        });
    
        return nextDayForecasts.map((forecast) => (

          <div key={forecast.dt} className="carousel-slide">
            <div className="carousel-content">
            <div className="carousel-day">{forecast.dt_txt.substring(0, 10)}</div>
            <div className="carousel-day">{forecast.dt_txt.substring(10)}</div>
              <div className="carousel-icon">
                <img src={mapIdToIcon(forecast.weather[0].id)} alt="Weather Icon" />
              </div>
              <div className="carousel-description">{forecast.weather[0].description}</div>
            </div>
          </div>
        ));
      }
    };
    
  
    return (
      <div className="carousel-container">
        <button className="carousel-button prev-button"  onClick={handlePreviousDay}>
          {'<<<'}
        </button>
          {getForecastsForCurrentDay()}
        <button className="carousel-button next-button" onClick={handleNextDay}>
          {'>>>'}
        </button>
      </div>
    );
  };
  

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
        
          {weatherData && (
            <div className="weather-summary">
              <h2>Current Weather for {cityName}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Icon</th>
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
                    <td><img src={mapIdToIcon(weatherData.weather[0].id)} /></td>
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
              <div className='container'>
      {forecastData && <ForecastCarousel />}
    </div>
             
            </div>
            
          )}
          
        </>
      )}
    </div>
  );
};

export default WeatherApp;
