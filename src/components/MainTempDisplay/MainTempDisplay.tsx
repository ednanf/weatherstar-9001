import React, { memo } from 'react';
import { useIcon } from '../../hooks/useIcon';
import useConditionCode from '../../hooks/useConditionCode';
import useCapitalizeFirstLetter from '../../hooks/useCapitalizeFirstLetter';
import useDegreesToDirection from '../../hooks/useDegreesToDirection';

import './MainTempDisplay.css';

interface MainTempDisplayProps {
  temp: number;
  tempUnit: string;
  desc: number;
  iconCode: number;
  wind: number;
  windDirection: number;
}

/**
 * MainTempDisplay component that displays the main temperature, weather conditions, and wind information.
 * Uses React.memo for performance optimization.
 *
 * @param {MainTempDisplayProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered MainTempDisplay component.
 */
const MainTempDisplay: React.FC<MainTempDisplayProps> = memo(
  ({ temp, tempUnit, desc, iconCode, wind, windDirection }): JSX.Element => {
    return (
      <div id='main-temp-container'>
        <div id='main-temp-conditions'>
          <div id='main-temperature'>
            <p>{Math.ceil(temp)}</p>
            <span id='main-degrees'>{tempUnit}</span>
          </div>
          <p id='main-conditions'>{useCapitalizeFirstLetter(useConditionCode(desc))}</p>
          <div id='main-weather-icon'>{useIcon(iconCode, 'lg')}</div>
          <p id='main-weather-wind-speed'>
            Wind: {useDegreesToDirection(windDirection)} {wind}
          </p>
        </div>
      </div>
    );
  },
);

export default React.memo(MainTempDisplay);
