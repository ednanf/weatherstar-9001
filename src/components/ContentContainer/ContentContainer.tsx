import React from 'react';

import CurrentWeatherDisplay from '../CurrentWeatherDisplay/CurrentWeatherDisplay';

import './ContentContainer.css';

interface ContentContainerProps {
  weatherData: object;
  cityName: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ weatherData, cityName }) => {
  return (
    <div id='content-container'>
      <CurrentWeatherDisplay weatherData={weatherData} cityName={cityName} />
    </div>
  );
};

export default ContentContainer;
