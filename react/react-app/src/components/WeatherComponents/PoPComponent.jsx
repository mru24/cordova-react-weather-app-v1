import {getUnitLabels} from '../Functions'

function PoP({pop=0,rain=0,snow=0,units}) {
  let rainInMM = rain;
  if (units === 'imperial') {
    rainInMM = rainInMM * 0.03937;
  }
  let snowInMM = snow;
  if (units === 'imperial') {
    snowInMM = snowInMM * 0.03937;
  }
  const label = getUnitLabels(units);

  return (
    <>
      { pop > 0 && (
        <p className="pt-1 fs-3">
          <span>🌧️ {pop*100}{label.pop}</span>
        </p>
      )}
      { rainInMM > 0 && (
        <p className="pt-1 fs-3">
          <span>💧 {rainInMM}{label.precip}</span>
        </p>
      )}
      { snowInMM > 0 && (
        <p className="pt-1 fs-3">
          <span>❄️ {snowInMM}{label.precip}</span>
        </p>
      )}
    </>

  )
}

export default PoP;