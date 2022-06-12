import React from "react";
import Girl from "../assets/heroImage.svg";
import her from "../assets/heroMobileImage.svg"


const HeroRight = () => {
  return (
    <>
      <img
        src={Girl}
        className="hidden md:flex xl:min-w-[113%] lg:min-w-[155%] lg:-mt-[1rem] lg:ml-[3rem] xl:-mt-[6rem] md:-ml-[3rem] md:-mb-[8rem] xl:ml-[4rem] "
        alt="her img"
      />
      <img src={her} 
      className="md:hidden block min-w-[481px] xs:-ml-[4rem] sm:-ml-[1rem]  md:-ml-[2rem] -mb-[7rem] -mt-[3rem]"
      alt="hero img" />
    </>
  );
};

export default HeroRight;
