import "../css/App.css";
import SearchBar from "./SearchBar";
import Main from "./Main";
import Details from "./Details";
import Forecast from "./Forecast";
import getFormattedWeatherData from "../api/weather";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-blue-700 to-blue-700 h-fit shadow-xl ">
        <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <Main weather={weather} />
            <Details weather={weather} />
            <Forecast weather={weather} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
