import React, { useEffect, useState } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import TomorrowIOEmbed from './tomorrowio';

const customStyles = {
  fontFamily: 'Helvetica, sans-serif',
  //gradientStart: '#B9D7B2',
  //gradientMid: '#B9D7B2',
 // gradientEnd: '#3A4F35',
  locationFontColor: '#3A4F35',
  todayTempFontColor: '#3A4F35',
  todayDateFontColor: '#3A4F35',
  todayRangeFontColor: '#3A4F35',
  todayDescFontColor: '#3A4F35',
  todayInfoFontColor: '#3A4F35',
  todayIconColor: '#3A4F35',
  //forecastBackgroundColor: '#3A4F35',
  forecastSeparatorColor: '#3A4F35',
  forecastDateColor: '#3A4F35',
  forecastDescColor: '#3A4F35',
  forecastRangeColor: '#3A4F35',
  forecastIconColor: '#3A4F35',
};

const WeatherMap = ({ showTomorrowEmbed }) => {
  const [userLocation, setUserLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lon: longitude });
          });
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    };

    fetchLocation();
  }, []);

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '77dd1b5e5014ecbf9db74d7aafa07c87',
    lat: userLocation.lat,
    lon: userLocation.lon,
    lang: 'en',
    unit: 'imperial',
  });

  return (
    <div>
      {showTomorrowEmbed && <TomorrowIOEmbed />}

      {userLocation.lat && userLocation.lon && (
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Current Location"
          unitsLabels={{ temperature: 'F', windSpeed: 'mph' }}
          theme={customStyles}
        />
      )}
    </div>
  );
};

export default WeatherMap;
