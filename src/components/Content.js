import React from "react";
import ImageOne from "../images/egg-1.jpg";
import ImageTwo from "../images/egg-2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Egg with Rice</h2>
          <p className="mb-2">Crispy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Egg Waffle</h2>
          <p className="mb-2">Crispy, delicious, and nutritious</p>
          <span>$10</span>
        </div>
      </div>
    </>
  );
};

export default Content;
