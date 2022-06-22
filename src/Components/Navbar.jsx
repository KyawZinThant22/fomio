import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fomio from "../assets/fomioLogo.svg";
import { Nav, socialIcon } from "../data";
import { Divide as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className="container p-8 mx-auto flex items-center justify-between ">
      <Link to="/">
        <img
          src={Fomio}
          alt=""
          className="w-[66px] xs:w-[90px] md:w-[158px] "
        />
      </Link>
      <ul className="lg:flex hidden lg:flex-row  gap-12 ">
        {Nav.map((nav) => (
          <li
            key={nav.name}
            className="text-white text-xl  md:flex  hover:text-primary "
          >
            <a className="cursor-pointer" href={nav.tag}>
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="hidden lg:flex px-6 py-2 border-solid border-2  hover:bg-primary text-primary hover:text-white border-primary rounded-lg text-xl">
        Contact Us
      </button>
      <div className="lg:hidden">
        <Hamburger
          color="#08d9d6"
          size={25}
          toggle={() => setToggleMenu(!toggleMenu)}
          toggled={toggleMenu}
        />
        {toggleMenu && (
          <div className="bg-black w-full  flex flex-col pt-6   right-0 z-40 top-0 h-[23rem] absolute mobileNav ">
            <div className="flex justify-between px-12 ">
              <Link to="/">
                <img
                  src={Fomio}
                  alt=""
                  className="w-[66px] xs:w-[90px] md:w-[158px] "
                />
              </Link>

              <Hamburger
                color="#08d9d6"
                size={25}
                toggle={() => setToggleMenu(!toggleMenu)}
                toggled={toggleMenu}
              />
            </div>
            <div className="border-solid border-t-[1px] border-primary mx-6 mb-4  "></div>
            <ul className="flex flex-col items-start gap-6 px-12 ">
              {Nav.map((nav) => (
                <li
                  key={nav.name}
                  className="text-white text-xl  hover:text-primary "
                >
                  <a className="cursor-pointer text-lg" href={nav.tag}>
                    {nav.name}
                  </a>
                </li>
              ))}
              <div className="flex gap-3 self-end">
                {socialIcon.map((icon) => (
                  <img src={icon} key={icon} alt="icon" />
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
