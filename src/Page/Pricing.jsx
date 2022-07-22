import React from "react";
import PricingCard from "../Components/PricingCard";
import { PriceCard } from "../data";

const Pricing = () => {
  return (
    <div className="mt-[11rem]  mb-52 relative" id="pricing">
      <div className="text-center space-y-6 ">
        <h1 className="lg:text-4xl md:text-3xl xs:text-xl font-bold text-white leading-[60px]">
          An Exceptional Service,{" "}
          <span className="text-primary"> At a Right Price.</span>
        </h1>
        <p className="leading-[36px] text-white xs:text-lg lg:text-xl w-[341px] mx-auto">
          Start with our most Popular plan and switch to Enterprise, as you grow
        </p>
      </div>

      

      <div className="lg:mt-[8rem] xs:mt-[3rem] flex flex-col lg:flex-row  md:items-center justify-center space-y-4 lg:space-y-0 gap-1 pricingFont">
        {PriceCard.map((card) => (
          <PricingCard card={card} color={card.color} key={card.plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
