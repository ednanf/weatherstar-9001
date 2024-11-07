import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Footer from './components/Footer/Footer';

import './App.css';

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

// TODO: Test and fix any errors when the user denies geolocation permissions.

interface Coordinates {
  lat?: number;
  lon?: number;
}

interface CurrentWeatherData {
  weather?: [
    {
      id: number;
      main: string;
      description: string;
    },
  ];
  main?: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind?: {
    speed: number;
  };
  name?: string;
}

function App() {
  const [coordinates, setCoordinates] = useState<Coordinates>({});
  const [currentWeatherData, setCurrentWeatherData] = useState<CurrentWeatherData>({
    weather: [
      {
        'id': 0,
        main: '--',
        description: '--',
      },
    ],
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
    },
    name: 'LOADING...',
  });

  // TODO: Remove this const and the console log.
  const consoleDate = new Date();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({ lat: position.coords.latitude, lon: position.coords.longitude });
    });
  }, []);

  useEffect(() => {
    async function fetchCurrentWeather() {
      if (coordinates && Object.keys(coordinates).length > 0) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${API_KEY}`,
          );
          console.log(`${consoleDate.toTimeString().split(' ')[0]}: Fetched data!`);
          const data = await response.json();
          setCurrentWeatherData({ ...data });
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
        <ContentContainer currentWeatherData={currentWeatherData} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
