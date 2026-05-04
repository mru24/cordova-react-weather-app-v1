import Hour from "./HourComponent"
import { startOfDay, endOfDay, formatTime, formatDate, getDayName } from '../Functions'

function HourlyWeather({ current, hourly, units, slider }) {

  const Slider = slider;
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <div className="content">
        <p className="pt-2 text-center">{formatDate(current.dt)} | {getDayName(current.dt)}</p>
        <Slider {...settings}>
          {(() => {
            const filteredHourly = hourly.filter((hour) => {
              return hour.dt >= startOfDay(current.dt) && hour.dt <= endOfDay(current.dt);
            });

            return filteredHourly.length > 0 ? (
              filteredHourly.map((hour) => (
                <div className="hour-slide" key={hour.dt} inert>
                  <Hour hour={hour} units={units} slider={slider} />
                </div>
              ))
            ) : (
              <p className="p-2">No hourly data</p>
            );
          })()}
        </Slider>
      </div>
    </div>
  )
}

export default HourlyWeather;