import React from 'react';

import useTextNormalization from '../../hooks/useTextNormalization';
import { useConvertToKm } from '../../hooks/convertToMetric';

import './SecondaryTempDisplay.css';

interface SecondaryTempDisplayProps {
  city: string;
  feelsLike: number;
  humidity: number;
  dewpoint: number;
  visibility: number;
  pressure: number;
}

const SecondaryTempDisplay: React.FC<SecondaryTempDisplayProps> = ({
  city,
  feelsLike,
  humidity,
  dewpoint,
  visibility,
  pressure,
}) => {
  return (
    <div id='secondary-temp-container'>
      <div id='secondary-city'>
        <p>{useTextNormalization(city)}</p>
      </div>
      <div id='secondary-data'>
        <p>Feels like: {Math.ceil(feelsLike)}°C</p>
        <p>Humidity: {Math.floor(humidity)}%</p>
        <p>Dewpoint: {dewpoint}°C</p>
        <p>Visibility: {useConvertToKm(visibility)}</p>
        <p>Pressure: {pressure} hPa</p>
      </div>
    </div>
  );
};

export default SecondaryTempDisplay;
