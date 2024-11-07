import React from 'react';

import useTextNormalization from '../../hooks/useTextNormalization';

import './SecondaryTempDisplay.css';

interface SecondaryTempDisplayProps {
  city: string;
  feelsLike: number;
  wind: number;
  humidity: number;
  pressure: number;
}

const SecondaryTempDisplay: React.FC<SecondaryTempDisplayProps> = ({ city, feelsLike, wind, humidity, pressure }) => {
  return (
    <div id='secondary-temp-container'>
      <div id='secondary-city'>
        <p>{useTextNormalization(city)}</p>
      </div>
      <div id='secondary-data'>
        <p>Feels like: {Math.ceil(feelsLike)}°C</p>
        <p>Wind speed: {Math.ceil(wind)} m/s</p>
        <p>Humidity: {Math.floor(humidity)}%</p>
        <p>Pressure: {pressure} hPa</p>
      </div>
    </div>
  );
};

export default SecondaryTempDisplay;
