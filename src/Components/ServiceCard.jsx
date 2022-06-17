import React from "react";

const ServiceCard = ({ services }) => {
  return (
    <div  className="rounded-lg bg-white p-6 lg:h-[330px] sm:w-[300px] sm:h-[300px] md:w-[290px] xl:w-[530px] lg:w-[30rem] leading-[30px] shadowE">
      <div className=" mx-auto  w-[4rem] p-3 shadowF mb-8  rounded-full">
        <img className="mx-auto  w-[40px]" src={services.icon} alt="" />
      </div>
      <h3 className="text-2xl font-bold text-center leading-[30px] mb-8 ">{services.title}</h3>
      <p className="lg:w-[400px] sm:w-[250px] mx-auto text-center sm:text-sm  lg:text-xl text-secondaryBlue">{services.subTitle}</p>
    </div>
  );
};

export default ServiceCard;
