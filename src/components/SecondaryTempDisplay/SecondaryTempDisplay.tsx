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
  function removeAccents(word: String) {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  return (
    <div id='secondary-temp-container'>
      <div id='secondary-city'>
        <p>{removeAccents(city)}</p>
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
