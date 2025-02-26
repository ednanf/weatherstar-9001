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
 * Converts a numerical weather condition code to its corresponding textual description.
 * @param {WeatherConditionCode} code - The numerical code representing the weather condition.
 * @returns {string} A string describing the weather condition, or 'error' if the code is not recognized.
 */
export default function useConditionCode(code: WeatherConditionCode): string {
  switch (code) {
    case WeatherConditionCode.ClearSky:
      return 'clear sky';
    case WeatherConditionCode.MainlyClear:
      return 'mainly clear';
    case WeatherConditionCode.PartlyCloudy:
      return 'partly cloudy';
    case WeatherConditionCode.Overcast:
      return 'overcast';
    case WeatherConditionCode.Fog:
      return 'fog';
    case WeatherConditionCode.LightDrizzle:
      return 'light drizzle';
    case WeatherConditionCode.Drizzle:
      return 'drizzle';
    case WeatherConditionCode.HeavyDrizzle:
      return 'heavy drizzle';
    case WeatherConditionCode.FreezingDrizzle:
      return 'freezing drizzle';
    case WeatherConditionCode.LightRain:
      return 'light rain';
    case WeatherConditionCode.Rain:
      return 'rain';
    case WeatherConditionCode.HeavyRain:
      return 'heavy rain';
    case WeatherConditionCode.FreezingRain:
      return 'freezing rain';
    case WeatherConditionCode.LightSnow:
      return 'light snow';
    case WeatherConditionCode.Snow:
      return 'snow';
    case WeatherConditionCode.HeavySnow:
      return 'heavy snow';
    case WeatherConditionCode.SnowGrains:
      return 'snow grains';
    case WeatherConditionCode.LightShowers:
      return 'light showers';
    case WeatherConditionCode.Showers:
      return 'showers';
    case WeatherConditionCode.HeavyShowers:
      return 'heavy showers';
    case WeatherConditionCode.SnowShowers:
      return 'snow showers';
    case WeatherConditionCode.Thunderstorm:
      return 'thunderstorm';
    case WeatherConditionCode.ThunderstormWithHail:
      return 'thunderstorm with hail';
    default:
      return 'error';
  }
}
