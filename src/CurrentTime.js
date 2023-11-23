import React from "react";

export default function CurrentTime(props) {
  return (
    <div className="currentWeather">
      <span id="currentTime">{props.value}</span>{" "}
    </div>
  );
}
