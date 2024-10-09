import Header from './components/Header/Header';
import ContentContainer from './components/ContentContainer/ContentContainer';

import './App.css';

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

function App() {
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
