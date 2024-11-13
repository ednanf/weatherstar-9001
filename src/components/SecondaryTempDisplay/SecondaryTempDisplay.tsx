import React from 'react';

import useTextNormalization from '../../hooks/useTextNormalization';

import './SecondaryTempDisplay.css';

interface SecondaryTempDisplayProps {
  city: string;
  humidity: number;
  dewpoint: number;
  feelsLike: number;
  pressure: number;
}

const SecondaryTempDisplay: React.FC<SecondaryTempDisplayProps> = ({
  city,
  humidity,
  dewpoint,
  feelsLike,
  pressure,
}) => {
  return (
    <div id='secondary-temp-container'>
      <div id='secondary-city'>
        <p>{useTextNormalization(city)}</p>
      </div>
      <div id='secondary-data'>
        <p>Humidity: {Math.floor(humidity)}%</p>
        <p>Dewpoint: {dewpoint}°C</p>
        <p>Feels like: {Math.ceil(feelsLike)}°C</p>
        <p>Pressure: {pressure} hPa</p>
      </div>
    </div>
  );
};

export default SecondaryTempDisplay;
