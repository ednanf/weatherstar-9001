import {
  ClearCondition,
  CloudyIcon,
  FogIcon,
  LightSnowIcon,
  RainIcon,
  ShowerIcon,
  ThunderSnowIcon,
  ThunderStormIcon,
  WindIcon,
} from '../libraries/WeatherIcons';

type useIcon = {
  id: string;
};

function useIcon(id: number, size: string) {
  switch (true) {
    case id >= 200 && id <= 232:
      // thunderstorm
      return <ThunderStormIcon size={size} />;
    case id >= 300 && id <= 321:
      // drizzle
      return <ShowerIcon size={size} />;
    case id >= 500 && id <= 531:
      //rain
      return <RainIcon size={size} />;
    case id >= 600 && id <= 622:
      // snow
      return <LightSnowIcon size={size} />;
    case id === 701:
      // mist
      return <FogIcon size={size} />;
    case id === 711:
      // smoke
      return <FogIcon size={size} />;
    case id === 721:
      // haze
      return <FogIcon size={size} />;
    case id === 731:
      // dust
      return <FogIcon size={size} />;
    case id === 741:
      // fog
      return <FogIcon size={size} />;
    case id === 751:
      // sand
      return <WindIcon size={size} />;
    case id === 761:
      // dust
      return <WindIcon size={size} />;
    case id === 762:
      // ash
      return <WindIcon size={size} />;
    case id === 771:
      // squall
      return <WindIcon size={size} />;
    case id === 781:
      // tornado
      return <WindIcon size={size} />;
    case id === 800:
      // clear
      return <ClearCondition size={size} />;
    case id >= 801 && id <= 804:
      // cloudy
      return <CloudyIcon size={size} />;
    default:
      return <h2>--</h2>;
  }
}
export { useIcon };
