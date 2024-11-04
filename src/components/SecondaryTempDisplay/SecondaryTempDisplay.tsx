import React from 'react';

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
    <div>
      <p>{city}</p>
      <p>Feels like: {Math.ceil(feelsLike)}°C</p>
      <p>Wind speed: {Math.ceil(wind)} m/s</p>
      <p>Humidity: {Math.floor(humidity)}%</p>
      <p>Pressure: {pressure} hPa</p>
    </div>
  );
};

export default SecondaryTempDisplay;
