import React from 'react';

import MainTempDisplay from '../MainTempDisplay/MainTempDisplay';
import SecondaryTempDisplay from '../SecondaryTempDisplay/SecondaryTempDisplay';

interface WeatherDisplayProps {
  weatherData: any;
  cityName: string;
}

// TODO: how to reuse a type declaration from another file

const CurrentWeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData, cityName }) => {
  //   console.log(weatherData.hourly.weather_code[0]);
  return (
    <>
      <div className='content-container-item'>
        <MainTempDisplay
          temp={weatherData.hourly.temperature_2m[0]}
          desc={weatherData.hourly.weather_code[0]}
          iconCode={weatherData.hourly.weather_code[0]}
        />
      </div>
      <div className='content-container-item'>
        {/* <SecondaryTempDisplay city={cityName} feelsLike={} wind={} humidity={} pressure={} /> */}
      </div>
    </>
  );
};

export default CurrentWeatherDisplay;
