import { useEffect, useState } from "react";

export default function Days() {
  const [weatherData, setWeatherData] = useState([]);

  const lat = 40.986166;
  const long = 37.879721;
  const key = "6adf8057569a4673bec88bcb320a5141";
  const API = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=${key}&lang=en&days=7`;
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setWeatherData(data.data));
  }, []);
  console.log(weatherData);
  const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <div>
      {weatherData.map((xx, key) => {
        
        return (
          
          <>
            <div className="cards">
              <h2>{days[getDayy(xx.datetime)]} </h2>
              <img
                src={
                  "https://www.weatherbit.io/static/img/icons/" +
                  xx.weather.icon +
                  ".png"
                }
              />
              <h4>{xx.weather.description}</h4>
              <h4 className="temps">{xx.max_temp}</h4>
              <h4 className="temps">{xx.min_temp}</h4>
            </div>
          </>
        );
      })}
    </div>
  );
}

function getDayy(date){
  const d = new Date(date).getDay();

  return d;
}
