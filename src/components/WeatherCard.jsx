import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/theme/ThemeContext";
import WeatherContext from "../context/weather/WeatherContext";
import { fetchWeather } from "../context/weather/WeatherAction";
import Spinner from "./Spinner";

const WeatherCard = () => {
  const { theme } = useContext(ThemeContext);
  const { weatherData, dispatch } = useContext(WeatherContext);

  const getWeather = async () => {
    const data = await fetchWeather("Indore");
    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (!weatherData) {
    return <Spinner />;
  }

  return (
    <div className={theme ? "card p-3 bg-secondary" : "card p-3"}>
      <p className="my-3">Today's Weather</p>
      <span className="d-flex align-items-center justify-content-between">
        <span>
          <h2>{weatherData?.location.name}</h2>
          <h1>{weatherData?.current.temp_c}</h1>
        </span>
        <span className="text-center">
          <img src={weatherData?.current.condition.icon} alt="" />
          <p className={theme ? "text-dark" : "text-secondary"}>
            {weatherData?.current.condition.text}
          </p>
        </span>
      </span>
    </div>
  );
};

export default WeatherCard;
