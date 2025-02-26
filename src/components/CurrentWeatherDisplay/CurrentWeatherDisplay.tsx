/**
 * Renders the current weather data and additional weather details.
 * Uses optional chaining and fallback values for numeric properties.
 */
import React from 'react';
import { WeatherData } from '../../types/WeatherData.types';

import MainTempDisplay from '../MainTempDisplay/MainTempDisplay';
import SecondaryTempDisplay from '../SecondaryTempDisplay/SecondaryTempDisplay';

interface WeatherDisplayProps {
  weatherData: WeatherData;
  cityName: string;
}

/**
 * Renders the current weather data and additional weather details.
 * Weather data fields are retrieved from the WeatherData interface and displayed as required.
 */
const CurrentWeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData, cityName }) => {
  return (
    <>
      <div className='content-container-item'>
        <MainTempDisplay
          temp={weatherData.hourly.temperature_2m?.[0] ?? 0}
          tempUnit={weatherData.hourly_units?.temperature_2m ?? '°C'}
          desc={weatherData.hourly.weather_code?.[0] ?? 0}
          iconCode={weatherData.hourly.weather_code?.[0] ?? 0}
          wind={weatherData.hourly.wind_speed_10m?.[0] ?? 0}
          windDirection={weatherData.hourly.wind_direction_10m?.[0] ?? 0}
        />
      </div>
      <div className='content-container-item'>
        <SecondaryTempDisplay
          city={cityName}
          feelsLike={weatherData.hourly.apparent_temperature?.[0] ?? 0}
          feelsLikeUnit={weatherData.hourly_units?.apparent_temperature ?? '°C'}
          humidity={weatherData.hourly.relative_humidity_2m?.[0] ?? 0}
          dewpoint={weatherData.hourly.dew_point_2m?.[0] ?? 0}
          dewpointUnit={weatherData.hourly_units?.dew_point_2m ?? '°C'}
          visibility={weatherData.hourly.visibility?.[0] ?? 0}
          pressure={weatherData.hourly.surface_pressure?.[0] ?? 0}
          pressureUnit={weatherData.hourly_units?.surface_pressure ?? 'hPa'}
        />
      </div>
    </>
  );
};

export default CurrentWeatherDisplay;
