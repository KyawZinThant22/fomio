import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fomio from "../assets/fomioLogo.svg";
import { Nav, socialIcon } from "../data";
import { Divide as Hamburger } from "hamburger-react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 780) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={`${
        !visible
          ? "container p-8 mx-auto flex navbar items-center justify-between"
          : "bg-[#31374197]    z-50 flex items-center justify-between lg:py-5 navbar py-3 lg:px-28 px-12 w-full fixed top-0"
      } `}
    >
      <Link to="/">
        <img
          src={Fomio}
          alt="fomio logo"
          className="w-[66px] xs:w-[90px] md:w-[158px] "
        />
      </Link>
      <ul className="lg:flex hidden lg:flex-row  gap-12 ">
        {Nav.map((nav) => (
          <li
            key={nav.tag}
            className="text-white text-xl  md:flex  hover:text-primary "
          >
            <a className="cursor-pointer" href={nav.tag}>
              {nav.name}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact">
        <button aria-label="contact link button" className="hidden lg:flex px-6 py-2 border-solid border-2  hover:bg-primary text-primary hover:text-white border-primary rounded-lg text-xl">
          Contact
        </button>
      </a>
      <div className="lg:hidden">
        <Hamburger
          color="#08d9d6"
          size={25}
          toggle={() => setToggleMenu(!toggleMenu)}
          toggled={toggleMenu}
          alt="humburger icon"
        />
        {toggleMenu && (
          <div className="bg-black w-full  flex flex-col pt-6   right-0 z-40 top-0 h-[23rem] absolute mobileNav ">
            <div className="flex justify-between px-12 ">
              <Link to="/">
                <img
                  src={Fomio}
                  alt="fomio logo"
                  className="w-[66px] xs:w-[90px] md:w-[158px] "
                />
              </Link>

              <Hamburger
                color="#08d9d6"
                size={25}
                toggle={() => setToggleMenu(!toggleMenu)}
                toggled={toggleMenu}
                alt="humburger icon"
              />
            </div>
            <div className="border-solid border-t-[1px] border-primary mx-6 mb-4  "></div>
            <ul className="flex flex-col items-start gap-6 px-12 relative ">
              {Nav.map((nav) => (
                  <li
                    key={nav.tag}
                    className="text-white text-xl  hover:text-primary "
                  >
                    <a className="cursor-pointer text-lg" href={nav.tag}>
                      {nav.name}
                    </a>
                  </li>
              ))}

              <div className="flex gap-3 self-end">
                {socialIcon.map((icon) => (
                    <img src={icon.img} key={icon.img}  alt="icon" />
                ))}
              </div>
              <a href="#contact">
                <button aria-label="contact us button link" className="hover:bg-primary hover:text-white text-primary  absolute top-[205px] rounded-md border border-solid border-primary p-2">
                  Contact
                </button>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
