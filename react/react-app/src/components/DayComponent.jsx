import {getUnitLabels,formatTime,formatDate,getDayName} from './Functions'

function Day({day,units}) {
  const label = getUnitLabels(units);
  return (
    <div>
      <p>{ formatDate(day.dt) }</p>
      <p>{ getDayName(day.dt) }</p>
      <p>{ formatTime(day.dt) }</p>
      { day.temp.day }{label.temp}
    </div>
  )
}

export default Day;