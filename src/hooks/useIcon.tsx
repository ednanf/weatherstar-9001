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

enum WeatherConditionCode {
  ClearSky = 0,
  MainlyClear = 1,
  PartlyCloudy = 2,
  Overcast = 3,
  Fog = 45,
  LightDrizzle = 51,
  Drizzle = 53,
  HeavyDrizzle = 55,
  FreezingDrizzle = 56,
  LightRain = 61,
  Rain = 63,
  HeavyRain = 65,
  FreezingRain = 66,
  LightSnow = 71,
  Snow = 73,
  HeavySnow = 75,
  SnowGrains = 77,
  LightShowers = 80,
  Showers = 81,
  HeavyShowers = 82,
  SnowShowers = 85,
  Thunderstorm = 95,
  ThunderstormWithHail = 96,
}

/**
 * Custom React Hook to return an appropriate weather icon based on the provided weather code and size.
 *
 * @param {WeatherConditionCode} id - The unique identifier for the weather condition. This should correspond to a specific weather code.
 * @param {string} size - The desired size of the icon. This is typically specified as a string (e.g., 'small', 'large').
 * @returns {ReactElement} - Returns a React element representing the appropriate weather icon, or a default message if the id does not match any known weather condition.
 */
function useIcon(id: WeatherConditionCode, size: string): ReactElement {
  switch (id) {
    case WeatherConditionCode.ClearSky:
    case WeatherConditionCode.MainlyClear:
      return <SunnyIcon size={size} />;
    case WeatherConditionCode.PartlyCloudy:
      return <CloudyIcon size={size} />;
    case WeatherConditionCode.Overcast:
      return <MostlyCloudyIcon size={size} />;
    case WeatherConditionCode.Fog:
      return <FogIcon size={size} />;
    case WeatherConditionCode.LightDrizzle:
    case WeatherConditionCode.Drizzle:
    case WeatherConditionCode.HeavyDrizzle:
      return <ShowerIcon size={size} />;
    case WeatherConditionCode.FreezingDrizzle:
      return <FreezingRainIcon size={size} />;
    case WeatherConditionCode.LightRain:
    case WeatherConditionCode.Rain:
    case WeatherConditionCode.HeavyRain:
      return <RainIcon size={size} />;
    case WeatherConditionCode.FreezingRain:
      return <FreezingRainIcon size={size} />;
    case WeatherConditionCode.LightSnow:
      return <LightSnowIcon size={size} />;
    case WeatherConditionCode.Snow:
    case WeatherConditionCode.HeavySnow:
      return <HeavySnowIcon size={size} />;
    case WeatherConditionCode.SnowGrains:
      return <SleetIcon size={size} />;
    case WeatherConditionCode.LightShowers:
    case WeatherConditionCode.Showers:
    case WeatherConditionCode.HeavyShowers:
      return <ShowerIcon size={size} />;
    case WeatherConditionCode.SnowShowers:
      return <RainSnowIcon size={size} />;
    case WeatherConditionCode.Thunderstorm:
      return <ThunderStormIcon size={size} />;
    case WeatherConditionCode.ThunderstormWithHail:
      return <ThunderSnowIcon size={size} />;
    default:
      return <p>--</p>;
  }
}

export { useIcon, WeatherConditionCode };
