import React from 'react';

import MainTempDisplay from '../MainTempDisplay/MainTempDisplay';
import SecondaryTempDisplay from '../SecondaryTempDisplay/SecondaryTempDisplay';

interface CurrentWeatherDisplayProps {
  currentWeatherData: any;
}

const CurrentWeatherDisplay: React.FC<CurrentWeatherDisplayProps> = ({ currentWeatherData }) => {
  return (
    <>
      <div className='content-container-item'>
        <MainTempDisplay
          temp={currentWeatherData?.main?.temp}
          desc={currentWeatherData?.weather[0]?.description}
          iconCode={currentWeatherData?.weather[0]?.id}
        />
      </div>
      <div className='content-container-item'>
        <SecondaryTempDisplay
          city={currentWeatherData?.name}
          feelsLike={currentWeatherData?.main?.feels_like}
          wind={currentWeatherData?.wind?.speed}
          humidity={currentWeatherData?.main?.humidity}
          pressure={currentWeatherData?.main?.pressure}
        />
      </div>
    </>
  );
};

export default CurrentWeatherDisplay;
