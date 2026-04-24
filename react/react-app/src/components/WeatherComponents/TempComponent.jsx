import {getUnitLabels} from '../Functions'

function Temp({temp,units}) {
  if(!temp) return;
  let tempInC = temp;
  if (units === 'imperial') {
    tempInC = (temp - 32) * 5/9;
  }
  const label = getUnitLabels(units);
  const colorLabel = tempInC>25 ? 'red-vibrant' : tempInC<15 ? 'yellow-muted' : tempInC < 5 ? 'blue-electric' : 'green-spring';
  const roundTemp = Math.round(temp * 10) / 10;

  return (
    <p className="pt-1 fs-3">
      <span className={`${colorLabel} ps-1`}>{roundTemp}{label.temp}</span>
    </p>
  )
}

export default Temp;