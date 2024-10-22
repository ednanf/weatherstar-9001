import React from 'react';

import CurrentWeatherDisplay from '../CurrentWeatherDisplay/CurrentWeatherDisplay';

import './ContentContainer.css';

interface ContentContainerProps {
  currentWeatherData: any;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ currentWeatherData }) => {
  return (
    <div id='content-container'>
      <CurrentWeatherDisplay currentWeatherData={currentWeatherData} />
    </div>
  );
};

export default ContentContainer;
