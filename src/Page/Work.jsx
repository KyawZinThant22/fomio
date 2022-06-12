import React from "react";
import Slider from "../Components/Slider";
import  {images}  from "../data";
import { images2 } from "../data";

const Work = () => {


  return (
    <div className="h-screen mt-12 lg:mt-[12rem]  " id="projects">
      <div className="text-center space-y-4 ">
        <h1 className="text-primary text-5xl  font-bold">
          Our Work
        </h1>
        <p className="text-white text-lg">Things We've Made</p>
      </div>

      <div className=" mt-20 ">
        <Slider content={images} direction="ltr" />

        <Slider content={images2} direction="rtl" />
      </div>
    </div>
  );
};

export default Work;
