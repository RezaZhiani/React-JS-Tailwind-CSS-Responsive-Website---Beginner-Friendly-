import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="mx-w-[1240px] mx-auto grid mg:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            {" "}
            Cillum velit mollit cillum cupidatat qui sint anim do ut labore ea
            dolore.Aliqua nisi labore irure esse exercitation proident cupidatat
            mollit ipsum eu esse elit.
          </p>
          <button className="bg-[#000000] w-[280px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
