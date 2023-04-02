import React, { useState } from "react";
import {
  UilSearch,
  UilLocationPoint,
  UilCelsius,
  UilFahrenheit,
} from "@iconscout/react-unicons";

function SearchBar({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  //function for searching the input
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  //function to fetch the current location
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-green font-light hover:text-white"
          onClick={handleUnitsChange}
        >
          <UilCelsius />
        </button>
        <button
          name="imperial"
          className="text-xl text-yellow font-light mx-4 hover:text-white"
          onClick={handleUnitsChange}
        >
          <UilFahrenheit />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
