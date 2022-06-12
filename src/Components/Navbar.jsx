import React from "react";
import Fomio from "../assets/fomioLogo.svg";
import { Nav } from "../data";

const Navbar = () => {
  return (
    <nav className="container p-8 mx-auto flex items-center justify-between">
      <a href="/">
        <img src={Fomio} alt="" className="w-[66px] md:w-[158px]" />
      </a>
      <ul className="md:flex hidden gap-12 ">
        {Nav.map((nav) => (
          <li key={nav.name} className="text-white text-xl hidden md:flex hover:text-primary ">
            <a className="cursor-pointer" href={nav.tag}>{nav.name}</a>
          </li>
        ))}
      </ul>
      <button className="hidden md:flex px-6 py-2 border-solid border-2  hover:bg-primary text-primary border-primary rounded-lg text-xl">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
