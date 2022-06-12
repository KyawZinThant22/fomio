import React from "react";
import Girl from "../assets/heroImage.svg";
import her from "../assets/heroMobileImage.svg"


const HeroRight = () => {
  return (
    <>
      <img
        src={Girl}
        className="hidden md:flex min-w-[113%]  md:-ml-[3rem] md:-mb-[8rem] xl:ml-[4rem]"
        alt="her img"
      />
      <img src={her} 
      className="md:hidden min-w-[481px]   md:-ml-[2rem] -mb-[7rem] -mt-[3rem]"
      alt="hero img" />
    </>
  );
};

export default HeroRight;
