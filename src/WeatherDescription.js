import React from "react";

export default function WeatherDescription(props) {
  return (
    <div className="currentWeather">
      <span id="description">{props.value}</span>
    </div>
  );
}
