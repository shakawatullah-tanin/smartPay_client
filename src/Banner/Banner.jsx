import React from "react";

import nesco from "../assets/Logo_of_NESCO.svg";
import desco from "../assets//Logo_of_DESCO.svg";

import wasa from "../assets/Seal_of_Dhaka_Water_Supply_and_Sewerage_Authority.svg"

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full py-3">
        <div id="item1" className="carousel-item w-full">
          <img
            src={nesco}
            className="w-full h-60"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={desco}
            className="w-full h-52"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={wasa}
            className="w-full h-52"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
