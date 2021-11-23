import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="main-banner flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold">
          Best Food Waiting For Your Belly
        </h2>
        <div className="flex justify-center items-center bg-white rounded-3xl overflow-hidden mt-6 w-5/6 mx-auto">
          <input
            className="w-full p-3 rounded-3xl outline-none"
            type="text"
            placeholder="Search food items"
          />
          <button className="btn p-3 px-8 rounded-3xl">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
