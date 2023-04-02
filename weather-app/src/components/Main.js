import React from "react";
import { formatToLocalTime } from "../api/weather";
function Main({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-10">
        <p className="text-white text-xl font-light">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-xl font-medium">{`${name} , ${country}`}</p>
      </div>
    </div>
  );
}

export default Main;
