import React from "react";
import Arror from "../assets/rightArrow.svg"
const HeroLeft = () => {
  return (
    <div className="mt-12 md:inline-block flex flex-col items-center lg:text-center xl:text-start">
      <h1 className="text-primary hidden  md:text-[40px] md:block lg:text-[60px] md:-mr-[7rem] font-bold md:leading-[50px] lg:leading-[88px]">
        Design is on us.<br /> Ambassador Of Your <span className="text-white">Brand.</span>
      </h1>

    {/* for mobile */}
      <h1 className="text-primary md:hidden  text-[30px] w-[16rem] text-center leading-[39px] font-bold">
        Ambassador  Of Your <span className="text-white md:hidden">Brand.</span>
      </h1>

      <p className="text-white md:w-[650px] xl:text-xl lg:text-2xl lg:leading-[40px]  w-[21rem] text-[15px] md:leading-[30px] md:text-lg mt-5 md:mt-12">
          Fomio is a Website Development Agency.We build websites to help you grow your business and online presence with the least amount of price. 
      </p>
      <div className=" space-x-8 items-center md:mt-24 mt-12 hidden xl:flex ">
          <button className="bg-primary md:px-8 md:py-3 px-3 py-1 text-sm text-white md:text-2xl rounded-lg flex items-center gap-2 md:gap-4 ">Explore <img src={Arror} alt="" className="md:text-2xl text-sm md:w-8 w-4" /> </button>
          <button className="text-white text-2xl hidden md:flex">Get In Touch</button>
      </div>
    </div>
  );
};

export default HeroLeft;
