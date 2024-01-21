import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDaily.css";

export default function WeatherDaily() {
  return (
    <div className="WeatherDaily">
      <div className="row">
        <div className="col">
          <div className="WeatherDaily-day">Fri</div>
          <WeatherIcon code="scattered-clouds-day" size={36} />
          <div className="WeatherDaily-temperatures">
            <span className="WeatherDaily-temperature-max">22°</span>
            <span className="WeatherDaily-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
