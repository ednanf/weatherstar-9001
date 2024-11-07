import { useIcon } from '../../hooks/useIcon';
import './MainTempDisplay.css';

interface MainTempDisplayProps {
  temp: number;
  desc: string;
  iconCode: number;
}

const MainTempDisplay: React.FC<MainTempDisplayProps> = ({ temp, desc, iconCode }) => {
  return (
    <div id='main-temp-container'>
      <div id='main-temp-conditions'>
        <div id='main-temperature'>
          <p>{Math.ceil(temp)}</p>
          <span id='main-degrees'>º</span>
        </div>
        <p id='main-conditions'>{desc}</p>
        <div id='main-weather-icon'>{useIcon(iconCode, 'lg')}</div>
      </div>
    </div>
  );
};

export default MainTempDisplay;
