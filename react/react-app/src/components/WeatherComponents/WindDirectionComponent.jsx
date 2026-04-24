import {getUnitLabels} from '../Functions'

function WindDirection({dir}) {
  if(!dir) return;
  return (
    <div className="flex direction-column align-items-center justify-content-center">
      <p>Wind</p>
      <div
        style={{
          transform: `rotate(${dir}deg)`,
          width: "30px"
        }}
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 2 L15 8 H13 V22 H11 V8 H9 Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}

export default WindDirection;