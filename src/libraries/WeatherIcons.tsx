import BlowingSnowImage from '../assets/WeatherIcons/Blowing-Snow.gif';
import ClearImage from '../assets/WeatherIcons/ClearCondition.gif';
import CloudyImage from '../assets/WeatherIcons/Cloudy.gif';
import FogImage from '../assets/WeatherIcons/Fog.gif';
import FreezingRainSleetImage from '../assets/WeatherIcons/Freezing-Rain-Sleet.gif';
import FreezingRainSnowImage from '../assets/WeatherIcons/Freezing-Rain-Snow.gif';
import FreezingRainImage from '../assets/WeatherIcons/Freezing-Rain.gif';
import HeavySnowImage from '../assets/WeatherIcons/Heavy-Snow.gif';
import LightSnowImage from '../assets/WeatherIcons/Light-Snow.gif';
import MostlyClearImage from '../assets/WeatherIcons/Mostly-Clear.gif';
import MostlyCloudyImage from '../assets/WeatherIcons/Mostly-Cloudy.gif';
import PartlyClearImage from '../assets/WeatherIcons/Partly-Clear.gif';
import PartlyCloudyImage from '../assets/WeatherIcons/Partly-Cloudy.gif';
import RainSleetImage from '../assets/WeatherIcons/Rain-Sleet.gif';
import RainSnowImage from '../assets/WeatherIcons/Rain-Snow.gif';
import RainImage from '../assets/WeatherIcons/Rain.gif';
import ShowerImage from '../assets/WeatherIcons/Shower.gif';
import SleetImage from '../assets/WeatherIcons/Sleet.gif';
import SnowSleetImage from '../assets/WeatherIcons/Snow-Sleet.gif';
import SunnyImage from '../assets/WeatherIcons/Sunny.gif';
import ThunderImage from '../assets/WeatherIcons/Thunder.gif';
import ThunderSnowImage from '../assets/WeatherIcons/Thundersnow.gif';
import ThunderStormImage from '../assets/WeatherIcons/Thunderstorm.gif';
import WindImage from '../assets/WeatherIcons/Wind.gif';
import WintryMixImage from '../assets/WeatherIcons/Wintry-Mix.gif';

import './WeatherIcons.css';

interface Props {
  size: string;
}

export function BlowingSnowIcon({ size }: Props) {
  return <img src={BlowingSnowImage} alt='Blowing Snow' className={size} />;
}

export function ClearCondition({ size }: Props) {
  return <img src={ClearImage} alt='Clear' className={size} />;
}

export function CloudyIcon({ size }: Props) {
  return <img src={CloudyImage} alt='Cloudy' className={size} />;
}

export function FogIcon({ size }: Props) {
  return <img src={FogImage} alt='Fog' className={size} />;
}

export function FreezingRainSleetIcon({ size }: Props) {
  return <img src={FreezingRainSleetImage} alt='Freezing Rain Sleet' className={size} />;
}

export function FreezingRainSnowIcon({ size }: Props) {
  return <img src={FreezingRainSnowImage} alt='Freezing Rain Snow' className={size} />;
}

export function FreezingRainIcon({ size }: Props) {
  return <img src={FreezingRainImage} alt='Freezing Rain' className={size} />;
}

export function HeavySnowIcon({ size }: Props) {
  return <img src={HeavySnowImage} alt='Heavy Snow' className={size} />;
}

export function LightSnowIcon({ size }: Props) {
  return <img src={LightSnowImage} alt='Light Snow' className={size} />;
}

export function MostlyClearIcon({ size }: Props) {
  return <img src={MostlyClearImage} alt='Mostly Clear' className={size} />;
}

export function MostlyCloudyIcon({ size }: Props) {
  return <img src={MostlyCloudyImage} alt='Mostly Cloudy' className={size} />;
}

export function PartlyClearIcon({ size }: Props) {
  return <img src={PartlyClearImage} alt='Partly Clear' className={size} />;
}

export function PartlyCloudyIcon({ size }: Props) {
  return <img src={PartlyCloudyImage} alt='Partly Cloudy' className={size} />;
}

export function RainSleetIcon({ size }: Props) {
  return <img src={RainSleetImage} alt='Rain Sleet' className={size} />;
}

export function RainSnowIcon({ size }: Props) {
  return <img src={RainSnowImage} alt='Rain Snow' className={size} />;
}

export function RainIcon({ size }: Props) {
  return <img src={RainImage} alt='Rain' className={size} />;
}

export function ShowerIcon({ size }: Props) {
  return <img src={ShowerImage} alt='Shower' className={size} />;
}

export function SleetIcon({ size }: Props) {
  return <img src={SleetImage} alt='Sleet' className={size} />;
}

export function SnowSleetIcon({ size }: Props) {
  return <img src={SnowSleetImage} alt='Snow Sleet' className={size} />;
}

export function SunnyIcon({ size }: Props) {
  return <img src={SunnyImage} alt='Sunny' className={size} />;
}

export function ThunderIcon({ size }: Props) {
  return <img src={ThunderImage} alt='Thunder' className={size} />;
}

export function ThunderSnowIcon({ size }: Props) {
  return <img src={ThunderSnowImage} alt='Thunder Snow' className={size} />;
}

export function ThunderStormIcon({ size }: Props) {
  return <img src={ThunderStormImage} alt='Thunder Storm' className={size} />;
}

export function WindIcon({ size }: Props) {
  return <img src={WindImage} alt='Windy' className={size} />;
}

export function WintryMixIcon({ size }: Props) {
  return <img src={WintryMixImage} alt='Wintry Mix' className={size} />;
}
