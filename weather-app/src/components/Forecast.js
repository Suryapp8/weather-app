import React from "react";
import { iconUrlFromCode } from "../api/weather"

function Forecast({weather : {icon}}) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">Weekly Forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sa">04:30</p>
          <img className="w-12 my-1" src={iconUrlFromCode(icon)} alt="" />
          <p className="font-medium">24</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sa">04:30</p>
          <img className="w-12 my-1" src={iconUrlFromCode(icon)} alt="" />
          <p className="font-medium">25</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sa">04:30</p>
          <img className="w-12 my-1" src={iconUrlFromCode(icon)} alt="" />
          <p className="font-medium">26</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sa">04:30</p>
          <img className="w-12 my-1" src={iconUrlFromCode(icon)} alt="" />
          <p className="font-medium">27</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sa">04:30</p>
          <img className="w-12 my-1" src={iconUrlFromCode(icon)} alt="" />
          <p className="font-medium">28</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
