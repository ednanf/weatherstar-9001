import React from 'react';

import CurrentWeatherDisplay from '../CurrentWeatherDisplay/CurrentWeatherDisplay';

import './ContentContainer.css';

interface ContentContainerProps {
  weatherData: object;
  cityName: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ weatherData, cityName }) => {
  const memoizedWeatherData = React.useMemo(() => weatherData, [weatherData]);

  return (
    <div id='content-container'>
      <CurrentWeatherDisplay weatherData={memoizedWeatherData} cityName={cityName} />
    </div>
  );
};

export default ContentContainer;
