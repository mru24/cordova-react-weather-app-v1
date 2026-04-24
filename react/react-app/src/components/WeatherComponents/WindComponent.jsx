import {getUnitLabels} from '../Functions'

function Wind({wind,units}) {
  let windInMS = wind;
  if (units === 'imperial') {
    windInMS = wind * 0.44704;
  }
  const label = getUnitLabels(units);
  const colorLabel = windInMS>10 ? 'red' : windInMS>5 ? 'yellow-muted' : '';
  const roundWind = Math.round(wind * 10) / 10;

  return (
    <p className="flex direction-row justify-content-center pt-1">
      <img src="icons/wind.svg" width={20} />
      <span className={`${colorLabel} fs-0 ps-1`}>{roundWind}{label.speed}</span>
    </p>
  )
}

export default Wind;