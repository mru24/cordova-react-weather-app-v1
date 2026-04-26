import {getUnitLabels} from '../Functions'

function Pressure({pressure,units}) {
  const label = getUnitLabels(units);

  return (
    <p className="pt-1 fs-3">
      <span>{pressure}{label.pressure}</span>
    </p>
  )
}

export default Pressure;