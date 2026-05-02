import { getUnitLabels } from '../Functions'

function Gusts({ gusts, units, icon }) {
  if (!gusts) return;
  let gustsInMS = gusts;
  if (units === 'imperial') {
    gustsInMS = gusts * 0.44704;
  }
  const label = getUnitLabels(units);
  const colorLabel = gustsInMS > 15 ? 'red' : gustsInMS > 10 ? 'yellow-muted' : '';
  const roundGusts = Math.round(gusts * 10) / 10;

  return (
    <p className="flex direction-row justify-content-center">
      {icon !== false && <img src="icons/gusts.svg" width={24} />}
      <span className={`${colorLabel} ps-1`}>{roundGusts}{label.speed}</span>
    </p>
  )
}

export default Gusts;