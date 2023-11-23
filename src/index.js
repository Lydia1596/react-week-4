import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import City from "./City";
import CurrentTime from "./CurrentTime";
import Precipitation from "./Precipitation";
import Temperature from "./Temperature";
import WeatherDescription from "./WeatherDescription";
import Wind from "./Wind";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bodyContainer">
      <div className="card">
        <div className="cardBody">
          <div className="searchBar">
            <form id="citySearchForm">
              <input
                type="text"
                placeholder="Enter a city"
                id="citySearchBox"
                className="searchBox"
              />
              <input type="submit" value="Search" className="btn btnInfo" />
              <button id="geoLocationButton">Current Location</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container textCenter mainDisplay">
        <div className="row alignItemsEnd">
          <div className="col city">
            <City value="London" />
            <CurrentTime value="Sunday 12:15" />
            <WeatherDescription value="Light cloud and a gentle breeze" />
          </div>
          <div className="col currentTempDisplay">
            <br />
            <Temperature value={18} />
            <Precipitation value={0} />
            <Wind value={11} />
          </div>
        </div>
      </div>
      <div className="container textCenter forecast" id="weatherForecast"></div>
    </div>
    <footer>
      <a
        href="https://github.com/Lydia1596/vanilla_weather_app.git"
        target="_blank"
        rel="noreferrer"
        className="githubLink"
      >
        Open-source code {}
      </a>
      by Lydia Prentice
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
