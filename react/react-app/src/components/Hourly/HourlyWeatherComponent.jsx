import Hour from "./HourComponent"
import {startOfDay,endOfDay,formatTime, formatDate} from '../Functions'

function HourlyWeather({ current,hourly,units,slider }) {

  const Slider = slider;
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
      <div className="slider-container" style={{marginBottom:"50px"}}>
        <div className="bg-dk my-2 radius-2">
          <div className="">
            <Slider {...settings}>
              {hourly
                .filter((hour)=>{
                  return hour.dt>=startOfDay(current.dt) && hour.dt<=endOfDay(current.dt);
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