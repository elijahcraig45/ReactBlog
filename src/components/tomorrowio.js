import React, { useEffect } from 'react';

const TomorrowIOEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'tomorrow-sdk';
    script.src = 'https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js';
    script.async = true;

    const tomorrowDiv = document.querySelector('.tomorrow');
    if (tomorrowDiv) {
      tomorrowDiv.appendChild(script);
    }

    return () => {
      if (tomorrowDiv && tomorrowDiv.contains(script)) {
        tomorrowDiv.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="tomorrow"
      data-location-id=""
      data-language="EN"
      data-unit-system="IMPERIAL"
      data-skin="light"
      data-widget-type="aqiPollen"
      style={{ paddingBottom: '22px', position: 'relative' }}
    >
      <a
        href="https://www.tomorrow.io/weather-api/"
        rel="nofollow noopener noreferrer"
        target="_blank"
        style={{ position: 'absolute', bottom: 0, transform: 'translateX(-50%)', left: '50%' }}
      >
        <img
          alt="Powered by the Tomorrow.io Weather API"
          src="https://weather-website-client.tomorrow.io/img/powered-by.svg"
          width="250"
          height="18"
        />
      </a>
    </div>
  );
};

export default TomorrowIOEmbed;
