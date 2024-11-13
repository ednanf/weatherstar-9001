import React, { useMemo } from 'react';

import CurrentWeatherDisplay from '../CurrentWeatherDisplay/CurrentWeatherDisplay';
import Clock from '../Clock/Clock';

import './ContentContainer.css';

interface ContentContainerProps {
  weatherData: object;
  cityName: string;
}

// TODO: tweak the clock's position

const ContentContainer: React.FC<ContentContainerProps> = ({ weatherData, cityName }) => {
  const memoizedWeatherData = useMemo(() => weatherData, [weatherData]);

  return (
    <div id='content-container'>
      {/* Margin 10vw because it's the same as the content container */}
      <div className='' style={{ position: 'absolute', right: '10vw', top: '5vh' }}>
        <Clock />
      </div>
      <CurrentWeatherDisplay weatherData={memoizedWeatherData} cityName={cityName} />
    </div>
  );
};

export default ContentContainer;
