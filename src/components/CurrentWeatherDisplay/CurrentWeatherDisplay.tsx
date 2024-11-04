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
        {/* TODO: remover os opcionais se não funcionar na primeira tentativa */}
        <MainTempDisplay temp={currentWeatherData?.main?.temp} desc={currentWeatherData?.weather[0]?.description} />
      </div>
      <div className='content-container-item'>
        <SecondaryTempDisplay />
      </div>
    </>
  );
};

export default CurrentWeatherDisplay;
