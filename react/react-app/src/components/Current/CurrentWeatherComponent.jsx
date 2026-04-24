import './currentWeatherComponent.css'
import SlickSlider from '../SlickSliderComponent'
import { getUnitLabels } from '../Functions'
import Temp from '../WeatherComponents/TempComponent';
import WeatherIcon from '../WeatherComponents/WeatherIconComponent';

function CurrentWeather({current,units}) {

  const label = getUnitLabels(units);

  if(!current) return <p>Loading weather...</p>

  return (
    <div className="current-weather">
      <div className="row pb-3">
        <div className="col">
          <div className="">
            <h1>
              <Temp temp={current.temp} units={units} />
            </h1>
          </div>
        </div>
        <div className="col flex direction-column justify-content-center">
          <WeatherIcon icon={current.weather[0].icon} size={2} units={units} />
          <p style={{marginTop:"-15px"}} className="text-center">{current.weather[0].main}</p>
        </div>
      </div>

      <div className="current-weather-slider" style={{marginBottom:"50px"}}>
        <SlickSlider target={'currentOverview'} current={current} units={units} />
      </div>
    </div>
  )
}

export default CurrentWeather