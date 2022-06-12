import React from "react";
import HeroLeft from "../Components/HeroLeft";
import HeroRight from "../Components/HeroRight";
import SplitScreen from "../Components/SplitScreen";

const Hero = () => {
  return (
    <section className="container mx-auto md:p-8 ">
      <SplitScreen leftWeight={1} RightWeight={1} >
        <HeroLeft />
        <HeroRight />
      </SplitScreen>
    </section>
  );
};

export default Hero;
