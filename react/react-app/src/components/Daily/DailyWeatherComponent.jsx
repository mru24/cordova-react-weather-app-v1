import { useState } from 'react'
import Day from './DayComponent';
import { getUnitLabels, formatTime, formatDate } from '../Functions'

function DailyWeather({ current, daily, hourly, units, slider, hourlyData, setHourlyData }) {
  const Slider = slider;
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <>
      <div className="slider-container">
        <div className="bg-dk my-2 radius-2">
          <div>
            <Slider {...settings}>
              {daily.map((day) => (
                <div className="day-slide" key={day.dt} onClick={() => { setHourlyData(day) }}>
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