import Hour from "./HourComponent"
import {startOfDay,endOfDay} from './Functions'

function HourlyWeather({ current,hourly,units,slider }) {
  const Slider = slider;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7
  };
  return (
    <>
      <div className="slider-container" style={{marginBottom:"50px"}}>
        <div className="bg-dk my-2 radius-2">
          <div className="py-3">
            <Slider {...settings}>
              {hourly
                .filter((hour)=>{
                  hour.dt>=startOfDay(current.dt) && hour.dt<=endOfDay(current.dt)
                })
                .map((hour)=>(
                <div className="hour-slide" key={hour.dt}>
                  <Hour hour={hour} units={units} slider={slider} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default HourlyWeather;