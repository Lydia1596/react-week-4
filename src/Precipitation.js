import React from "react";

export default function Precipitation(props) {
  return <p className="currentConditions">Precipitation: {props.value}%</p>;
}
