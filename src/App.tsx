import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import ContentContainer from './components/ContentContainer/ContentContainer';

import './App.css';

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

function App() {
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({ lat: position.coords.latitude, lon: position.coords.longitude });
    });
  }, []);

  console.log(coordinates);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ContentContainer />
      </main>
    </>
  );
}

export default App;
