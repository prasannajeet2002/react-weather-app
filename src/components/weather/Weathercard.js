import React , {useState , useEffect} from "react";
import "./Weather.css";

const Weathercard = ({ weatherInfo }) => {
  const [weatherMood, setWeatherMood] = useState("");

  const {
    temp,
    humidity,
    pressure,
    weathercond,
    name,
    speed,
    country,
    sunset,
  } = weatherInfo;

  useEffect(() => {
    if (weathercond) {
      switch (weathercond) {
        case "Clouds":
          setWeatherMood("fa-cloud");
          break;
        case "Rain":
          setWeatherMood("fa-cloud-rain");
          break;
        case "Fog":
          setWeatherMood("fa-cloud-fog");
          break;
          case "Fog":
          setWeatherMood("fa-sun-cloud");
          break;
          case "Haze":
          setWeatherMood("fa-sun-haze");
          break;
          
        default:
            setWeatherMood("fa-sun-cloud");
          break;
      }
    }
  }, [weathercond]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let time = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <div className="weather-box">
        <div className="icon">
          <i className={`fa fa-4x ${weatherMood}`}></i>
        </div>
        <div className="weather-cond">
          <div className="temp1">{temp}&deg;</div>
          <div className="temp2">
            <div className="weather">{weathercond}</div>
            <div className="city">
              {name} , {country}
            </div>
          </div>
        </div>
        <div className="weather-info">
          <div className="info-box">
            <div className="property">Sunset</div>
            <div className="value">{time}pm</div>
          </div>
          <div className="info-box">
            <div className="property">Humidity</div>
            <div className="value">{humidity}</div>
          </div>
          <div className="info-box">
            <div className="property">Wind Speed</div>
            <div className="value">{speed}</div>
          </div>
          <div className="info-box">
            <div className="property">Pressure</div>
            <div className="value">{pressure}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weathercard;
