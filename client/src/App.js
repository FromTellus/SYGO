import './App.css';
import React from 'react';
import DailyLowestTemp from './components/DailyLowestTemp';
import DailyHighestTemp from './components/DailyHighestTemp';
import Rain from './components/Rain';
import Footer from './components/Footer';
import SelectLocation from './components/SelectLocation';
import InputLocation from './components/InputLocation';
import RandomMovieFetcher from './components/RandomMovie';

function App() {
  const [minTemp, setMinTemp] = React.useState(null);
  const [maxTemp, setMaxTemp] = React.useState(null);
  const [rain, setRain] = React.useState(null);
  const [sygo, setSygo] = React.useState(null);
  const [latitude, setLatitude] = React.useState(59);
  const [longitude, setLongitude] = React.useState(18);
  const [RandomMovie, setRandomMovie] = React.useState(null);

  React.useEffect(() => {
    const fetcher = async () => {
     
      const weatherUrl = `/weather?lat=${latitude}&lon=${longitude}`
      const weatherResponse = await fetch(weatherUrl);
      const weather = await weatherResponse.json();
      const movieResponse = await fetch('/randomMovie');
      const movie = await movieResponse.json();

      console.log('fetcher fired');
      if (weather.daily.temperature_2m_min[0] < 10 || weather.daily.rain_sum[0] > 1) {
        setSygo('no');
      }
      if (weather.daily.temperature_2m_max[0] > 15 && weather.daily.rain_sum[0] < 1) {
        setSygo('yes');
      }
      console.log(movie, 'this is da movie');
      setRandomMovie(movie.name);
      setRain(weather.daily.rain_sum[0]);
      setMaxTemp(weather.daily.temperature_2m_max[0]);
      setMinTemp(weather.daily.temperature_2m_min[0]);
    };
    fetcher();
  },
  [latitude, longitude]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>SYGO</h1>
        <SelectLocation 
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        latitude={latitude}
        longitude={longitude}
        />
              <InputLocation
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          latitude={latitude}
          longitude={longitude} 
        />
      </header>
      <div className="App-header2">
      </div>
      <section className="App--info">
        <h2>Should you go outside?</h2>
        <div className="Weather-info">
          <DailyLowestTemp temp={minTemp} />
          <DailyHighestTemp temp={maxTemp} />
          {rain > 1 ? 
          <Rain 
          rain={rain}
          sygo={sygo}
          setSygo={setSygo}
           /> 
          : null}
          {/* <Rain 
          rain={rain}
          sygo={sygo}
          setSygo={setSygo} /> */}
        </div>
        <div> 
          {sygo === 'yes' ? <h3>I think you should go outside!</h3> : <RandomMovieFetcher movie={RandomMovie} />}
          </div>
      </section>
      <Footer sygo={sygo} />
    </div>
  );
}

export default App;
