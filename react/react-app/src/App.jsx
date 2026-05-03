import { useState, useEffect } from 'react'
import { useDebounce } from 'react-use'
import axios from 'axios'
import CurrentWeather from './components/Current/CurrentWeatherComponent'
import Footer from './components/FooterComponents'
import Header from './components/HeaderComponent'
import SlickSlider from './components/SlickSliderComponent'
import Search from './components/Search/SearchComponent'
import SearchResults from './components/Search/SearchResultsComponent'

import './App.css'

function App({ coords }) {
  const [units, setUnits] = useState('metric')
  const [data, setData] = useState(null)
  const [current, setCurrent] = useState(null)
  const [daily, setDaily] = useState(null)
  const [hourly, setHourly] = useState(null)
  const [hourlyData, setHourlyData] = useState(null)

  const [searchQuery, setSearchQuery] = useState('')
  const [debounceSearchQuery, setDebouncedQuery] = useState('')
  useDebounce(() => setDebouncedQuery(searchQuery), 800, [searchQuery])

  const [searchResults, setSearchResults] = useState([])

  const defaultCoords = {
    lat: coords?.lat || import.meta.env.VITE_WEATHER_LAT,
    lon: coords?.lng || import.meta.env.VITE_WEATHER_LON
  };
  const [selectedCoords, setSelectedCoords] = useState(defaultCoords);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  const getUnits = () => {
    setUnits((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  }
  const getLocation = async () => {
    const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=8&appid=${API_KEY}`)
    console.log('Location: ', response);
    setSearchResults(response.data);
  }
  const handleReset = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedCoords(defaultCoords);
  };

  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${selectedCoords.lat}&lon=${selectedCoords.lon}&units=${units}&appid=${API_KEY}`)
      setData(response.data)
      setCurrent(response.data.current)
      setDaily(response.data.daily)
      setHourly(response.data.hourly)
      console.log(response.data)
      setSearchResults(null)
    }
    getWeather()
  }, [units, selectedCoords])

  useEffect(() => {
    if (searchQuery.length > 3) {
      getLocation();
    }
  }, [debounceSearchQuery])

  return (
    <>
      <Header data={data} units={units} />

      <div className="content">
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleReset={handleReset} />
        <SearchResults
          searchResults={searchResults}
          onLocationSelect={(lat, lon) => setSelectedCoords({ lat, lon })} />

        {current && <CurrentWeather current={current} units={units} />}

        {hourly && <SlickSlider target={'hourly'} current={current} hourly={hourly} units={units} />}

        {daily && <SlickSlider target={'daily'} current={current} daily={daily} hourly={hourly} units={units} hourlyData={hourlyData} setHourlyData={setHourlyData} />}

        {hourlyData && <SlickSlider target={'hourly'} current={hourlyData} hourly={hourly} units={units} />}

      </div>

      <Footer getUnits={getUnits} units={units} coords={coords} />
    </>
  )
}

export default App