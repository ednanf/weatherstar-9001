import React from 'react';

import MainTempDisplay from '../MainTempDisplay/MainTempDisplay';
import SecondaryTempDisplay from '../SecondaryTempDisplay/SecondaryTempDisplay';

function CurrentWeatherDisplay() {
  return (
    <>
      <div className='content-container-item'>
        <MainTempDisplay />
      </div>
      <div className='content-container-item'>
        <SecondaryTempDisplay />
      </div>
    </>
  );
}

export default CurrentWeatherDisplay;
