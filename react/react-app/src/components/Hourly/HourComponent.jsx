import {getUnitLabels,formatTime,formatDate} from '../Functions'
import Temp from '../WeatherComponents/TempComponent';
import Wind from '../WeatherComponents/WindComponent'
import './HourComponent.css'

function Hour({hour,units}) {
  const label = getUnitLabels(units);
  return (
    <div className="p-3 text-center fs-2">
      <p>{ formatTime(hour.dt)}</p>
      <div className="flex direction-column align-items-center justify-content-center h-100">
        <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} />
        <p style={{marginTop:"-5px",marginBottom:"5px"}}>{hour.weather[0].main}</p>
      </div>
      <Temp temp={hour.temp} units={units} />
      <Wind wind={hour.wind_speed} units={units} />
    </div>
  )
}

export default Hour;