import { useState, useEffect } from "react";
import CityTheme from "../context/CityContext";

export default function Cards() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { theCity, setCity } = CityTheme();
  const key = "6adf8057569a4673bec88bcb320a5141";

  const API = `https://api.weatherbit.io/v2.0/forecast/daily?city=${theCity}&key=${key}&lang=en&days=7`;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data.data);
        setLoading(false);
      })
      .catch((e) => console.log(e))
      .finally(setLoading(false));
  }, [theCity]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  if (day < 10) {
    day = 0 + day.toString();
  }
  if (month < 10) {
    month = 0 + month.toString();
  }
  let currentDate = `${year}-${month}-${day}`;

  console.log(weatherData)
  return (
    <div>
      {loading ? <h1>Loading..</h1> : null}
      {weatherData.map((xx, key) => {
        return (
          <>
            <div
              className={xx.datetime === currentDate ? "cards today" : "cards"}
            >
              
              <h2>{days[getDayy(xx.datetime)]} </h2>
              <div>
                <div className="left">
                  <img
                    src={
                      "https://www.weatherbit.io/static/img/icons/" +
                      xx.weather.icon +
                      ".png"
                    }
                  />
                </div>
                <div className="right">
                  <h4>Precipitation:{xx.pop}%</h4>
                  <h4>Humidity:{xx.rh}%</h4>
                  <h4>Wind Speed:{(xx.wind_spd * 3.6).toFixed(2)} m/s</h4>
                </div>
              </div>
              <h6 className="invisible">----------</h6>
              <h3 className="description">{xx.weather.description}</h3>
              <h2 className="max temps">{xx.max_temp}°</h2>
              <h2 className="min temps">{xx.min_temp}°</h2>
            </div>
          </>
        );
      })}
    </div>
  );
}

function getDayy(date) {
  const d = new Date(date).getDay();

  return d;
}
