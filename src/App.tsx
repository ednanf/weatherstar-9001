import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Footer from './components/Footer/Footer';
import { WeatherData } from './types/WeatherData.types';

import './App.css';

enum ApiKeys {
  LOCATION_API_KEY = import.meta.env.VITE_LOCATION_KEY,
}

// TODO: Error handling when the user denies geolocation permissions.
// TODO: Add clock to the top right corner of the page and check api calls.
// TODO: Add spinner while loading data

interface Coordinates {
  lat?: number;
  lon?: number;
}

interface CityData {
  name: string;
}

function App(): JSX.Element {
  const [coordinates, setCoordinates] = useState<Coordinates>({});
  const [cityName, setCityName] = useState('--');
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
      relative_humidity_2m: '--',
      dew_point_2m: '--',
      precipitation_probability: '--',
      apparent_temperature: '--',
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
      apparent_temperature: [],
      relative_humidity_2m: [],
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

  /**
   * This effect runs once when the component mounts and uses the browser's Geolocation API to retrieve the user's current coordinates.
   * It sets the retrieved latitude and longitude into the state using the `setCoordinates` function.
   *
   * @effect
   * @param {Array} [] - An empty dependency array, meaning this effect runs only once after the initial render.
   * @param {Function} useEffect - The React hook from which this custom hook is derived.
   * @returns {void}
   */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({ lat: position.coords.latitude, lon: position.coords.longitude });
      });
    }
  }, []);

  /**
   * useEffect Hook to fetch and set the current city name based on given coordinates.
   * @param {Object} coordinates - An object containing latitude and longitude properties.
   * @param {number} coordinates.lat - The latitude coordinate.
   * @param {number} coordinates.lon - The longitude coordinate.
   * @param {string} LOCATION_API_KEY - The API key for the OpenWeatherMap service.
   */
  useEffect(() => {
    async function fetchCurrentCity(): Promise<void> {
      if (coordinates && Object.keys(coordinates).length > 0) {
        try {
          const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/reverse?lat=${coordinates.lat}&lon=${coordinates.lon}&limit=1&appid=${ApiKeys.LOCATION_API_KEY}`,
          );
          const data: CityData[] = await response.json();
          setCityName(data[0]?.name);
        } catch (error) {
          console.log('Error: ', error);
        }
      }
    }
    fetchCurrentCity();
  }, [coordinates]);

  /**
   * Performs an asynchronous fetch to retrieve current weather data based on given coordinates.
   *
   * @function useEffect
   * @param {Function} fetchCurrentWeather - The async function responsible for fetching the weather data.
   * @returns {void}
   */
  useEffect(() => {
    async function fetchCurrentWeather(): Promise<void> {
      if (coordinates && Object.keys(coordinates).length > 0) {
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,weather_code,surface_pressure,visibility,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto`,
          );
          const data: WeatherData = await response.json();
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
        <div>
          <Header />
        </div>
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
