import React from "react";

const Header = ({ title, subTitle ,width}) => {
  return (
    <>
      <div className="text-center space-y-4 ">
        <h1 className="text-primary lg:text-5xl xs:text-2xl font-bold">{title}</h1>
        <p className={`text-white xs:text-lg lg:text-xl ${width}`}>{subTitle}</p>
      </div>
    </>
  );
};

export default Header;
