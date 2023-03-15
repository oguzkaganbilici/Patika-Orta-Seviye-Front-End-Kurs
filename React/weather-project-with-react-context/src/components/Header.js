import Choice from "./Choice";
import CityTheme from "../context/CityContext";
export default function Header() {
  const {theCity} = CityTheme();

  return (
    <>
      <h1 className="header">7 days forecast for {theCity} </h1>
      <div>
        <h2 className="select">Select a city:</h2>
        <Choice />
      </div>
    </>
  );
}
