import { MostlyCloudyIcon } from '../../libraries/WeatherIcons';

import './MainTempDisplay.css';

// TODO: Fix weather icon size - 75px ~ 100px

// TODO: Find a alternative font

const MainTempDisplay = () => {
  return (
    <div id='main-temp-container'>
      <p id='main-city-name'>Ribeirão Preto</p>
      <MostlyCloudyIcon />
      <div id='main-temp-conditions'>
        <div id='main-temperature'>
          <p>77</p>
          <p>
            <span id='main-degrees'>º</span>
          </p>
        </div>
        <p id='main-conditions'>Thunderstorm</p>
      </div>
    </div>
  );
};

export default MainTempDisplay;
