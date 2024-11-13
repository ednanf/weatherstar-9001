import { ReactElement } from 'react';
import {
  CloudyIcon,
  FogIcon,
  FreezingRainIcon,
  HeavySnowIcon,
  LightSnowIcon,
  MostlyCloudyIcon,
  RainIcon,
  RainSnowIcon,
  ShowerIcon,
  SleetIcon,
  SunnyIcon,
  ThunderSnowIcon,
  ThunderStormIcon,
} from '../libraries/WeatherIcons';

type useIcon = {
  id: string;
};

/**
 * Custom React Hook to return an appropriate weather icon based on the provided weather code and size.
 *
 * @param {number} id - The unique identifier for the weather condition. This should correspond to a specific weather code.
 * @param {string} size - The desired size of the icon. This is typically specified as a string (e.g., 'small', 'large').
 * @returns {ReactElement} - Returns a React element representing the appropriate weather icon, or a default message if the id does not match any known weather condition.
 */
function useIcon(id: number, size: string): ReactElement {
  switch (true) {
    // clear sky
    case id === 0:
      return <SunnyIcon size={size} />;
    // mainly clear
    case id === 1:
      return <SunnyIcon size={size} />;
    // partly cloudy
    case id === 2:
      return <CloudyIcon size={size} />;
    // mostly cloudy (overcast)
    case id === 3:
      return <MostlyCloudyIcon size={size} />;
    // fog (fog, depositing rime fog)
    case id === 45 || id === 48:
      return <FogIcon size={size} />;
    // drizzle (light, moderate, dense)
    case id === 51 || id === 53 || id === 55:
      return <ShowerIcon size={size} />;
    // freezing drizzle (light, dense)
    case id === 56 || id === 57:
      return <FreezingRainIcon size={size} />;
    // rain (slight, moderate, heavy)
    case id === 61 || id === 63 || id === 65:
      return <RainIcon size={size} />;
    // freezing rain (light, heavy)
    case id === 66 || id === 67:
      return <FreezingRainIcon size={size} />;
    // snow fall (slight)
    case id === 71:
      return <LightSnowIcon size={size} />;
    // light snow  (moderate, heavy)
    case id === 73 || id === 75:
      return <HeavySnowIcon size={size} />;
    // snow grains
    case id === 77:
      return <SleetIcon size={size} />;
    // rain showers (slight, moderate, heavy)
    case id === 80 || id === 81 || id === 82:
      return <ShowerIcon size={size} />;
    // snow showers (slight, heavy)
    case id === 85 || id === 86:
      return <RainSnowIcon size={size} />;
    // thunderstorm (slight, moderate)
    case id === 95:
      return <ThunderStormIcon size={size} />;
    // thunderstorm with slight or heavy hail
    case id === 96 || id === 99:
      return <ThunderSnowIcon size={size} />;
    // default case / error handling
    default:
      return <p>--</p>;
  }
}
export { useIcon };
