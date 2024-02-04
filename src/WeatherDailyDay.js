import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDailyDay(props) {
  function minTemp() {
    // Check if temperature property and minimum property are defined
    if (
      props.data &&
      props.data.temperature &&
      props.data.temperature.minimum
    ) {
      let minTemp = Math.round(props.data.temperature.minimum);
      return `${minTemp}°`;
    } else {
      return "N/A";
    }
  }

  function maxTemp() {
    // Check if temperature property and maximum property are defined
    if (
      props.data &&
      props.data.temperature &&
      props.data.temperature.maximum
    ) {
      let maxTemp = Math.round(props.data.temperature.maximum);
      return `${maxTemp}°`;
    } else {
      return "N/A";
    }
  }

  function day() {
    // Check if time property is defined
    if (props.data && props.data.time) {
      let date = new Date(props.data.time * 1000);
      let day = date.getDay();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return days[day];
    } else {
      return "N/A";
    }
  }

  return (
    <div className="WeatherDaily-day">
      <div>{day()}</div>
      {props.data && props.data.condition && props.data.condition.icon && (
        <WeatherIcon code={props.data.condition.icon} size={36} />
      )}
      <div className="WeatherDaily-temperatures">
        <span className="WeatherDaily-temperature-max">{maxTemp()}</span>
        <span className="WeatherDaily-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
