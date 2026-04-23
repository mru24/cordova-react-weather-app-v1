import Hour from "./HourComponent";

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
      <div className="slider-container">
        <div className="bg-dk my-2 radius-2">
          <div className="py-3">
            <Slider {...settings}>
              {hourly.map((hour)=>(
                <Hour key={hour.dt} hour={hour} units={units} slider={slider} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default HourlyWeather;