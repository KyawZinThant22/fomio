import React from "react";
import check from "../assets/checkIcon.svg"
import whiteCheck from "../assets/whiteCheck.png"

const PricingCard = ({ card, color }) => {
  const { textColor } = card
  return (
    <div className={` ${color} md:w-[500px] ${textColor} border-y-4 border-solid ${card.borderColor}  sm:w-[400px]  xs:mx-4 sm:mx-auto lg:mx-0 p-8 rounded-[5px]  priceCard ${card.height} `} >
      <div className="text-center space-y-6">
        <img src={card.img} className="mx-auto" alt="" />
        <h1 className={`text-4xl  `}>{card.plan}</h1>
        <h1 className={`text-5xl font-extrabold`}>&#36;{card.price}</h1>
        <p className={` mx-auto leading-[30px] text-xl`}  >{card.body}</p>
        <button className="border-solid border-[2px] border-dark p-3 px-8  rounded-[5px]">Get Started</button>
      </div>
        <ul className="mt-12 space-y-6">
            {card.benefit.map((data)=>(
                <li className="flex items-center gap-6 leading-[26px] text-lg" key={data}>
                    <img src={check} className="w-[25px]" alt="check mark" />
                    {data}
                </li>
            ))}
          
        </ul>
     
    </div>
  );
};

export default PricingCard;
