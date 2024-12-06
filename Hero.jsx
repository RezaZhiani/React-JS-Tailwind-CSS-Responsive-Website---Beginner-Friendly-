import React from "react";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="mx-w-[800] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#08df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl md:pl-4 text-xl font-bold pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-2xl font-bold text-gray-500">
          Monitor your analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#08df9a] w-[280px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
