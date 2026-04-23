import CurrentOverview from "./CurrentOverviewComponent"

function SimpleSlider({target,current,units}) {

  if(target==='currentOverview') {
    return (
      <CurrentOverview current={current} units={units} />
    )
  }
}

export default SimpleSlider;
