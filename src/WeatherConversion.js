import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function calculateFahrenheit() {
    return (props.tempCelsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherConversion">
        <span className="temperature">{Math.round(props.tempCelsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherConversion">
        <span className="temperature">{Math.round(calculateFahrenheit())}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
