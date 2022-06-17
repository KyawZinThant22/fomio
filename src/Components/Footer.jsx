import React from "react";
import fomio from "../assets/fomioLogo.svg";

const footer = [
  "Team",
  "Service",
  "Terms of use",
  "Press",
  "Projects",
  "Privacy policy",
  "Fees",
  "Affiliates",
  "Contact Us",
];

const Footer = () => {
  return (
    <div id="footer" className="lg:w-[1300px] container mx-auto flex flex-col-reverse space-y-28 lg:items-end  lg:flex-row justify-between items-center mb-20">
      <div className=" flex flex-col  space-y-4 xs:text-center lg:text-start">
        <div className="border border-solid  lg:hidden  border-primary w-full my-12"></div>
        <img
          src={fomio}
          alt="logo"
          className="lg:w-[150px] w-[100px] mt-12  xs:mx-auto lg:mx-0"
        />
        <p className="text-primary lg:text-2xl w-[20rem]">
          Copyright © 2022 Fomio LLC. All rights reserved.
        </p>
      </div>
      <div className="grid grid-cols-3 xs:gap-6 md:gap-12 lg:gap-10 lg:gap-x-32">
        {footer.map((item) => (
          <a
            className="text-white lg:text-xl text-md font-light cursor-pointer"
            key={item}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
