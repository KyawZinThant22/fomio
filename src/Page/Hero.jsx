import React from "react";
import HeroLeft from "../Components/HeroLeft";
import HeroRight from "../Components/HeroRight";
import SplitScreen from "../Components/SplitScreen";

const Hero = () => {
  return (
    <section className="container mx-auto md:p-8 z-0" id="hero">
      <SplitScreen leftWeight={1} RightWeight={1} reverse >
        <HeroLeft />
        <HeroRight />
      </SplitScreen>

      {/* divider */}
      <div className="border  xl:mt-[2rem] lg:mt-[4rem] lg:flex border-solid border-t-[1px] md:w-[5rem] w-[3rem] mx-auto mt-[3rem] md:hidden md:-mt-[9rem]"></div>
    </section>
  );
};

export default Hero;
