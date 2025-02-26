import React from 'react';

import useTextNormalization from '../../hooks/useTextNormalization';
import { useConvertToKm } from '../../hooks/convertToMetric';

import './SecondaryTempDisplay.css';

interface SecondaryTempDisplayProps {
  city: string;
  feelsLike: number;
  feelsLikeUnit: string;
  humidity: number;
  dewpoint: number;
  dewpointUnit: string;
  visibility: number;
  pressure: number;
  pressureUnit: string;
}

// TODO: Adjust font sizes (bigger)
// TODO: Visibility won't use weatherData units as it is easier to convert via hook
// TODO: Make converToImperial

/**
 * SecondaryTempDisplay component that displays additional weather details such as feels like temperature, humidity, dewpoint, visibility, and pressure.
 *
 * @param {SecondaryTempDisplayProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered SecondaryTempDisplay component.
 */
const SecondaryTempDisplay: React.FC<SecondaryTempDisplayProps> = ({
  city,
  feelsLike,
  feelsLikeUnit,
  humidity,
  dewpoint,
  dewpointUnit,
  visibility,
  pressure,
  pressureUnit,
}): JSX.Element => {
  return (
    <div id='secondary-temp-container'>
      <div id='secondary-city'>
        <p>{useTextNormalization(city)}</p>
      </div>
      <div id='secondary-data'>
        <p>
          Feels like: {Math.ceil(feelsLike)}
          {feelsLikeUnit}
        </p>
        <p>Humidity: {Math.floor(humidity)}%</p>
        <p>
          Dewpoint: {dewpoint}
          {dewpointUnit}
        </p>
        <p>Visibility: {useConvertToKm(visibility)}</p>
        <p>
          Pressure: {pressure}
          {pressureUnit}
        </p>
      </div>
    </div>
  );
};

export default SecondaryTempDisplay;
