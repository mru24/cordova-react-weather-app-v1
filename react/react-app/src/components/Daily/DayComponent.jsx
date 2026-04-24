import {getUnitLabels,formatTime,formatDate,getDayName} from '../Functions'
import Temp from '../WeatherComponents/TempComponent';
import Wind from '../WeatherComponents/WindComponent';

function Day({day,units}) {
  const label = getUnitLabels(units);
  return (
    <div className="p-3 text-center">
      <p>{ formatDate(day.dt) }</p>
      <p>{ getDayName(day.dt) }</p>
      <div className="flex direction-column align-items-center justify-content-center h-100">
        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} />
        <p style={{marginTop:"-2px",marginBottom:"8px"}}>{day.weather[0].main}</p>
      </div>
      <Temp temp={day.temp.day} units={units} />

      <span className="flex direction-row align-items-baseline justify-content-center">
        Min: <Temp temp={day.temp.min} units={units} />
      </span>

      <span className="flex direction-row align-items-baseline justify-content-center pb-2">
        Max: <Temp temp={day.temp.max} units={units} />
      </span>

      <Wind wind={day.wind_speed} units={units} />

    </div>
  )
}

export default Day;