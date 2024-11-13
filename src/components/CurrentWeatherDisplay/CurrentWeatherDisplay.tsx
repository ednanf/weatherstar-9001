import React from 'react';

import MainTempDisplay from '../MainTempDisplay/MainTempDisplay';
import SecondaryTempDisplay from '../SecondaryTempDisplay/SecondaryTempDisplay';

interface WeatherDisplayProps {
  weatherData: any;
  cityName: string;
}

const CurrentWeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData, cityName }) => {
  //   console.log(weatherData.hourly.relative_humidity_2m[0]);
  return (
    <>
      <div className='content-container-item'>
        <MainTempDisplay
          temp={weatherData.hourly.temperature_2m[0]}
          desc={weatherData.hourly.weather_code[0]}
          iconCode={weatherData.hourly.weather_code[0]}
          wind={weatherData.hourly.wind_speed_10m[0]}
          windDirection={weatherData.hourly.wind_direction_10m[0]}
        />
      </div>
      <div className='content-container-item'>
        <SecondaryTempDisplay
          city={cityName}
          feelsLike={weatherData.hourly.apparent_temperature[0]}
          wind={weatherData.hourly.wind_speed_10m[0]}
          humidity={weatherData.hourly.relative_humidity_2m[0]}
          pressure={weatherData.hourly.surface_pressure[0]}
        />
      </div>
    </>
  );
};

export default CurrentWeatherDisplay;
