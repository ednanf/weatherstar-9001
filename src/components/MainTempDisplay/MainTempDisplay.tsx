import { MostlyCloudyIcon } from '../../libraries/WeatherIcons';

import './MainTempDisplay.css';

// TODO: Find how to remove anything from the name like accents

// TODO: Make the main rectangle have a maximum heigh width, and if it is reached,
// add the bottom blue bar

interface MainTempDisplayProps {
  temp: number;
  desc: string;
}

const MainTempDisplay: React.FC<MainTempDisplayProps> = ({ temp, desc }) => {
  return (
    <div id='main-temp-container'>
      <div id='main-temp-conditions'>
        <div id='main-temperature'>
          <p>{temp}</p>
          <p>
            <span id='main-degrees'>º</span>
          </p>
        </div>
        <p id='main-conditions'>{desc}</p>
        <MostlyCloudyIcon size='lg' />
      </div>
    </div>
  );
};

export default MainTempDisplay;
