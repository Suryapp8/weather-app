import React from "react";

import {
  UilTemperature,
} from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../api/weather";

function Details({
  weather: {
    details,
    icon,
    temp,
    feels_like,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="icon" className="w-20" />
        <p className="text-5xl">{`${temp}`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            <span className="font-large ml-2">{feels_like}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
