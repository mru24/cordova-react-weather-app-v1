import Day from './DayComponent';
import {getUnitLabels,formatTime,formatDate} from './Functions'

function DailyWeather({current,daily,hourly,units,slider}) {
  const Slider = slider;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <>
      <div className="slider-container" style={{marginBottom:"50px"}}>
        <div className="bg-dk my-2 radius-2">
          <div className="p-3">
            <Slider {...settings}>
              {daily.map((day)=>(
                <div className="day-slide" key={day.dt}>
                  <Day day={day} units={units} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default DailyWeather;