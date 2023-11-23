import React from "react";

export default function Temperature(props) {
  return (
    <h2>
      {" "}
      <img
        alt=""
        id="icon"
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
      />{" "}
      {props.value}°C
    </h2>
  );
}
