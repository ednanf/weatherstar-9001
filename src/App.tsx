import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Footer from './components/Footer/Footer';

import './App.css';

const LOCATION_API_KEY = import.meta.env.VITE_LOCATION_KEY;

// TODO: Test and fix any errors when the user denies geolocation permissions.
// TODO: Add clock to the top right corner of the page and check api calls.

interface Coordinates {
  lat?: number;
  lon?: number;
}

interface WeatherData {
  latitude: number;
  longitude: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
    relative_humidity: string;
    dew_point_2m: string;
    precipitation_probability: string;
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
    relative_humidity?: number[];
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

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates>({});
  const [cityName, setCityName] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData>({
    latitude: 0,
    longitude: 0,
    utc_offset_seconds: 0,
    timezone: '--',
    timezone_abbreviation: '--',
    elevation: 0,
    hourly_units: {
      time: '--',
      temperature_2m: '--',
      relative_humidity: '--',
      dew_point_2m: '--',
      precipitation_probability: '--',
      weather_code: '--',
      surface_pressure: '--',
      visibility: '--',
      wind_speed_10m: '--',
      wind_direction_10m: '--',
      wind_gusts_10m: '--',
    },
    hourly: {
      time: [],
      temperature_2m: [],
      relative_humidity: [],
      dew_point_2m: [],
      precipitation_probability: [],
      weather_code: [],
      surface_pressure: [],
      visibility: [],
      wind_speed_10m: [],
      wind_direction_10m: [],
      wind_gusts_10m: [],
    },
  });

  // TODO: Remove this const and the console log.
  const consoleDate = new Date();

  // Get current geolocation coordinates.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({ lat: position.coords.latitude, lon: position.coords.longitude });
    });
  }, []);

  // Get current city by coordinates.
  useEffect(() => {
    async function fetchCurrentCity() {
      if (coordinates && Object.keys(coordinates).length > 0) {
        try {
          const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates.lat}&lon=${coordinates.lon}&limit=1&appid=${LOCATION_API_KEY}`,
          );
          const data = await response.json();
          setCityName(data[0].name);
        } catch (error) {
          console.log('Error: ', error);
        }
      }
    }

    console.log(`[${consoleDate.toTimeString().split(' ')[0]}]: Fetched openweather data!`);

    fetchCurrentCity();
  }, [coordinates]);

  // Get weather forecast when the page loads or coordinates change.
  useEffect(() => {
    async function fetchCurrentWeather() {
      if (coordinates && Object.keys(coordinates).length > 0) {
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,weather_code,surface_pressure,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto`,
          );
          const data = await response.json();
          setWeatherData({ ...data });
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchCurrentWeather();
  }, [coordinates]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ContentContainer weatherData={weatherData} cityName={cityName} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
