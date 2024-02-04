import React, { useState, useEffect } from "react";
import "./WeatherDaily.css";
import axios from "axios";
import WeatherDailyDay from "./WeatherDailyDay";

export default function WeatherDaily(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);

    let key = `464808c4ate459aef56a4ba26c3ffo3a`;
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;

    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function handleError(error) {
    console.error("Error fetching weather data:", error);
    setLoaded(true); // Set loaded to true even if there's an error to avoid an infinite loading state
  }

  if (!loaded || !forecast || forecast.length === 0) {
    return (
      <div className="WeatherDaily">
        <div className="row">
          <div className="col">
            <p>No forecast data available.</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherDaily">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherDailyDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
