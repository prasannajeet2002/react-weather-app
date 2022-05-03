import React, { useState, useEffect } from "react";
import "./Weather.css";
import Weathercard from "./Weathercard";

const Weather = () => {
  const [searchCity, setSearchCity] = useState("angul");
  const [weatherInfo , setWeatherInfo] = useState({})

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=d51b758b0eba97e72e98b49fe12a6f24`;
      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathercond } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const NewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathercond,
        name,
        speed,
        country,
        sunset,
      };
      setWeatherInfo(NewWeatherInfo)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="search"
            className="search"
            placeholder="city"
            autoFocus
            id="search"
            autoComplete="off"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <button
            className="searchbutton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      <Weathercard weatherInfo={weatherInfo} />
    </>
  );
};

export default Weather;
