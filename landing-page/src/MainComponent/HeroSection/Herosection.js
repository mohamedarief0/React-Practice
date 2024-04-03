import React from "react";
import HeroBanner from '../../Asset/HeroMainBanner-Img.jpg'
const Herosection = () => {
  return (
    <>
      <div className="d-flex flex-wrap md-6 flex-row justify-content-center align-items-center m-3">
        <div className="md-4 align-items-ceter"> 
          <h2>Boost Productivity with our product</h2>
          <p>Studio press help your business amazing. An AI powered Product</p>
          <button type="submit"className="border-0 rounded-3 mt-3 px-3 py-2 bg-success text-light">Let's Start</button>
        </div>
        <div><img src={HeroBanner} className="" width={550}/></div>
      </div>
    </>
  );
};

export default Herosection;
