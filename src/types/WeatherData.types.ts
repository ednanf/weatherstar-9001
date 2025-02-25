export interface WeatherData {
    latitude: number;
    longitude: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: {
      time: string;
      temperature_2m: string;
      relative_humidity_2m: string;
      dew_point_2m: string;
      precipitation_probability: string;
      apparent_temperature: string;
      weather_code: string;
      surface_pressure: string;
      visibility: string;
      wind_speed_10m: string;
      wind_direction_10m: string;
      wind_gusts_10m: string;
    };
    hourly: {
      time: string[];
      temperature_2m?: number[];
      apparent_temperature: number[];
      relative_humidity_2m?: number[];
      dew_point_2m?: number[];
      precipitation_probability?: number[];
      weather_code?: number[];
      surface_pressure?: number[];
      visibility?: number[];
      wind_speed_10m?: number[];
      wind_direction_10m?: number[];
      wind_gusts_10m?: number[];
    };
  }
