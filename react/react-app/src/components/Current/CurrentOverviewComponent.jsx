import './CurrentOverviewComponent.css'
import {getUnitLabels} from '../Functions'
import Temp from '../WeatherComponents/TempComponent';
import Wind from '../WeatherComponents/WindComponent';
import WindDirection from '../WeatherComponents/WindDirectionComponent';

function CurrentOverview({current,units,slider}) {
  const label = getUnitLabels(units);
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
    <div className="slider-container">
      <div className="bg-dk my-2 radius-2">
        <div className="py-3">
          <Slider {...settings}>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Feels like</p>
                <h3>
                  <Temp temp={current.feels_like} units={units} />
                </h3>
              </div>
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Humidity</p>
                <h3>{ current?.humidity && current.humidity }{label.humidity}</h3>
              </div>
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Pressure</p>
                <h3>{ current?.pressure && current.pressure }{label.pressure}</h3>
              </div>
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Wind</p>
                <h3>
                  <Wind wind={current.wind_speed} units={units} icon={false} />
                </h3>
              </div>
            </div>
            <div className="">
              <WindDirection dir={current.wind_deg} />
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Gusts</p>
                <h3>
                  <Wind wind={current.wind_gust} units={units} icon={false} />
                </h3>
              </div>
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Clouds</p>
                <h3>{ current?.clouds && current.clouds }</h3>
              </div>
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Visibility</p>
                <h3>{ current?.visibility && current.visibility/1000 }{label.distance}</h3>
              </div>
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>UVI</p>
                <h3>{ current?.uvi && current.uvi }{label.UVI}</h3>
              </div>
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Dew Point</p>
                <h3>{ current?.dew_point && current.dew_point }{label.temp}</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CurrentOverview;