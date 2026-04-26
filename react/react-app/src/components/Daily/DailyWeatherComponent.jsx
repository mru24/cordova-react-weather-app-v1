import { useState } from 'react'
import Day from './DayComponent';
import {getUnitLabels,formatTime,formatDate} from '../Functions'

function DailyWeather({current,daily,hourly,units,slider,hourlyData,setHourlyData}) {
  const Slider = slider;
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <>
      <div className="slider-container" style={{marginBottom:"50px"}}>
        <div className="bg-dk my-2 radius-2">
          <div>
            <Slider {...settings}>
              {daily.map((day)=>(
                <div className="day-slide" key={day.dt} onClick={()=>{setHourlyData(day)}}>
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