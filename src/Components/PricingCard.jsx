import React from "react";
import check from "../assets/checkIcon.svg"
import whiteCheck from "../assets/whiteCheck.png"

const PricingCard = ({ card, color }) => {
  return (
    <div className={` ${color} md:w-[500px] xs:[300px]  sm:w-[400px]  xs:mx-4 sm:mx-auto p-8 rounded-[10px]  priceCard`}>
      <div className="text-center space-y-6">
        <h1 className="text-4xl">{card.plan}</h1>
        <h1 className="text-4xl">{card.price}</h1>
        <p className={` mx-auto leading-[30px]`} style={{width: `${card.bodyWidth}`}} >{card.body}</p>
        <button className="border-solid border-[2px] border-dark p-3 px-8  rounded-xl">Get Started</button>
      </div>
        <ul className="mt-12 space-y-4">
            {card.benefit.map((data)=>(
                <li className="flex items-center gap-6 leading-[26px] text-lg" key={data}>
                    <img src={check} className="w-[25px]" alt="check mark" />
                    {data}
                </li>
            ))}
            {card.nonBenefit.map((data)=>(
                <li className="flex items-center gap-6 leading-[26px] text-lg text-nonWhite" key={data}>
                    <img src={whiteCheck} className="w-[25px] " alt="check mark" />
                    {data}
                </li>
            ))}
        </ul>
     
    </div>
  );
};

export default PricingCard;
