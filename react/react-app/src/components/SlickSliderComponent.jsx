import CurrentOverview from "./CurrentOverviewComponent"
import HourlyWeather from "./HourlyWeatherComponent";
import '../assets/slick/slick.min.css'
import '../assets/slick/slick-theme.min.css'
import Slick from 'react-slick'
const Slider = Slick.default;

function SimpleSlider({target,current=null,hourly=[],units}) {

  if(target==='currentOverview') {
    return (
      <CurrentOverview key="current" current={current} units={units} slider={Slider} />
    )
  }
  if(target==='hourly') {
    return (
      <HourlyWeather key="hourly" current={current} hourly={hourly} units={units} slider={Slider} />
    )
  }
}

export default SimpleSlider;
