import React from "react";
import axios from "axios";
import { Bars } from "react-loader-spinner";

export default function Weather(props) {
  function displayWeather(response) {
    alert(
      `The temperature is ${Math.round(response.data.main.temp)} in ${
        response.data.name
      }`
    );
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=9cb72bec958f8fb02391985ed7b219d2&units=metric`;
  axios.get(url).then(displayWeather);

  return (
    <div>
      <h2>Hello from Weather</h2>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
