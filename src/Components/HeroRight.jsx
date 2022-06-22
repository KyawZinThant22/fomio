import React from "react";
import Girl from "../assets/heroImage.svg";
import her from "../assets/heroMobileImage.svg"


const HeroRight = () => {
  return (
    <div className="z-0">
      <img
        src={Girl}
        className="hidden md:flex z-0 xl:min-w-[113%] lg:min-w-[155%] lg:-mt-[1rem] lg:ml-[3rem] xl:-mt-[6rem] md:-ml-[3rem] md:-mb-[8rem] xl:ml-[4rem] "
        alt="her img"
      />
      <img src={her} 
      className="md:hidden  z-0 flex min-w-[481px] xs:-ml-[4rem] sm:-ml-[1rem]  md:-ml-[2rem] -mb-[7rem] -mt-[3rem]"
      alt="hero img" />
    </div>
  );
};

export default HeroRight;
