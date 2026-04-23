import './CurrentOverviewComponent.css'
import {getUnitLabels} from './Functions'

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
                <h3>{ current?.feels_like && current.feels_like }{label.temp}</h3>
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
                <h3>{ current?.wind_speed && current.wind_speed }{label.speed}</h3>
              </div>
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Wind</p>
                <div
                  style={{
                    transform: `rotate(${current.wind_deg}deg)`,
                    width: "30px"
                  }}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2 L15 8 H13 V22 H11 V8 H9 Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex direction-column align-items-center justify-content-center">
                <p>Gusts</p>
                <h3>{ current?.wind_gust && current.wind_gust }{label.speed}</h3>
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
                <h3>{ current?.dew_point && current.dew_point  }</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CurrentOverview;