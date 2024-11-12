import React from 'react';
import { useIcon } from '../../hooks/useIcon';
import useConditionCode from '../../hooks/useConditionCode';
import useCapitalizeFirstLetter from '../../hooks/useCapitalizeFirstLetter';

import './MainTempDisplay.css';

interface MainTempDisplayProps {
  temp: number;
  desc: number;
  iconCode: number;
}

const MainTempDisplay: React.FC<MainTempDisplayProps> = React.memo(({ temp, desc, iconCode }) => {
  return (
    <div id='main-temp-container'>
      <div id='main-temp-conditions'>
        <div id='main-temperature'>
          <p>{Math.ceil(temp)}</p>
          <span id='main-degrees'>º</span>
        </div>
        <p id='main-conditions'>{useCapitalizeFirstLetter(useConditionCode(desc))}</p>
        <div id='main-weather-icon'>{useIcon(iconCode, 'lg')}</div>
      </div>
    </div>
  );
});

export default React.memo(MainTempDisplay);
