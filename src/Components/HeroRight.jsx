import React from "react";
import Girl from "../assets/girl.svg";
import icon from "../assets/blueMsgBox.svg";

const HeroRight = () => {
  return (
    <div className="relative">
      <img
        src={Girl}
        className=" md:min-w-[113%] min-w-[481px] md:ml-[4rem] -ml-[1rem] -mb-[7rem] -mt-[3rem]"
        alt=""
      />
      <img
        src={icon}
        className="absolute md:top-[10rem] w-[5rem] md:w-[8rem] right-[16rem] top-[5rem]  md:right-[35rem] "
        alt=""
      />
    </div>
  );
};

export default HeroRight;
