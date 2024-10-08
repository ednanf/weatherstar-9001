import { MostlyCloudyIcon } from '../../libraries/WeatherIcons';

import './MainTempDisplay.css';

// TODO: Fix weather icon size - 75px ~ 100px

// TODO: Find how to remove anything from the name like accents

const MainTempDisplay = () => {
  return (
    <div id='main-temp-container'>
      <div id='main-temp-conditions'>
        <div id='main-temperature'>
          <p>77</p>
          <p>
            <span id='main-degrees'>º</span>
          </p>
        </div>
        <p id='main-conditions'>Thunderstorm</p>
        <MostlyCloudyIcon size='lg' />
      </div>
    </div>
  );
};

export default MainTempDisplay;
