import './currentWeatherComponent.css'

function CurrentWeather({current}) {
  console.log("Current: ",current);

  if(!current) return <p>Loading weather...</p>

  return (
    <div className="current-weather">
      <div className="row">
        <div className="col min-h-120">
          <div className="flex align-items-center justify-content-center h-100">
            <h1>{ current?.temp && current.temp }</h1>
          </div>
        </div>
        <div className="col min-h-120">
          <div className="flex direction-column align-items-center justify-content-center h-100">
            <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} />
            <p>{current.weather[0].main}</p>
          </div>
        </div>
      </div>
      <div className="bg-dk m-2">
        <div className="row py-2">
          <div className="col">
            <div className="flex direction-column align-items-center justify-content-center">
              <p>Humidity</p>
              <h3>{ current?.humidity && current.humidity }</h3>
            </div>
          </div>
          <div className="col">
            <div className="flex direction-column align-items-center justify-content-center">
              <p>Wind</p>
              <h3>{ current?.wind_speed && current.wind_speed }</h3>
            </div>
          </div>
          <div className="col">
            <div className="flex direction-column align-items-center justify-content-center">
              <p>Gusts</p>
              <h3>{ current?.wind_gust && current.wind_gust  }</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather