import React from "react";
import Header from "../Components/Header";
import PricingCard from "../Components/PricingCard";
import { PriceCard } from "../data";
import king from "../assets/crown.svg";

const Pricing = () => {
  return (
    <div className="mt-[11rem]  mb-52 relative" id="pricing ">
      <div className="text-center space-y-6 ">
        <h1 className="lg:text-4xl md:text-3xl xs:text-xl font-bold text-white leading-[60px]">
          An Exceptional Service,{" "}
          <span className="text-primary"> At a Right Price.</span>
        </h1>
        <p className="leading-[36px] text-white xs:text-lg lg:text-xl w-[341px] mx-auto">
          Start with our most Popular plan and switch to Enterprise, as you grow
        </p>
      </div>

      <img
        src={king}
        alt="crown"
        className="absolute lg:block hidden
         xl:left-[54rem]  xl:top-[10rem] lg:left-[42rem] lg:top-[10rem]"
      />

      <div className="lg:mt-[10rem] xs:mt-[5rem] flex flex-col lg:flex-row lg:items-end md:items-center justify-center gap-4">
        {PriceCard.map((card) => (
          <PricingCard card={card} color={card.color} key={card.plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
