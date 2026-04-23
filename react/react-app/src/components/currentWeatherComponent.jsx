import './currentWeatherComponent.css'
import SimpleSlider from './SlickSliderComponent'
import {getUnitLabels} from './Functions'

function CurrentWeather({current,units}) {

  const label = getUnitLabels(units);

  if(!current) return <p>Loading weather...</p>

  return (
    <div className="current-weather">
      <div className="row">
        <div className="col min-h-120">
          <div className="flex align-items-center justify-content-center h-100">
            <h1>{ current?.temp && current.temp }{label.temp}</h1>
          </div>
        </div>
        <div className="col min-h-120">
          <div className="flex direction-column align-items-center justify-content-center h-100">
            <img src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} />
            <p style={{marginTop:"-15px"}}>{current.weather[0].main}</p>
          </div>
        </div>
      </div>

      <div className="current-weather-slider">
        <SimpleSlider target={'currentOverview'} current={current} units={units} />
      </div>
    </div>
  )
}

export default CurrentWeather