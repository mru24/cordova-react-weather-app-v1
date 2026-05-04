import { useState } from 'react'
import Day from './DayComponent';
import { getUnitLabels, formatTime, formatDate } from '../Functions'

function DailyWeather({ current, daily, hourly, units, slider, hourlyData, setHourlyData }) {
  const Slider = slider;
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <>
      <div className="slider-container">
        <div className="content">
          <Slider {...settings}>
            {daily.map((day) => (
              <div className="day-slide" key={day.dt} onClick={() => { setHourlyData(day) }}>
                <Day day={day} units={units} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default DailyWeather;