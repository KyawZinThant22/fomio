import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import { images } from "../data";
import { images2 } from "../data";

const Work = () => {
  return (
    <div
      className="xl:h-screen xl:mt-12 lg:-mt-[-5rem] xs:mt-[6rem] md:mt-[4rem] "
      id="project"
    >
        <Header title="Our Work" subTitle="Things We've Made" />
      <div className=" mt-16 ">
        <div className=" flex flex-col">
          <Slider content={images} direction="ltr" />
        </div>
        <div className="hidden lg:flex flex-col">
          <Slider content={images2} direction="rtl" />
        </div>


        <div className="mt-12 mb-[5rem] text-center">
          <Link to="/projects">
          <button className="border-solid border-2 text-primary hover:text-white hover:bg-primary border-primary px-6 xl:text-2xl rounded-lg py-1">View All</button>
          </Link>
        </div>

      {/* divider */}
      <div className="border  xl:mt-[2rem] lg:mt-[4rem] xl:flex border-solid border-t-[1px] md:w-[5rem] w-[3rem] mx-auto mt-[3rem] md:-mt-[9rem]"></div>
      </div>
    </div>
  );
};

export default Work;
