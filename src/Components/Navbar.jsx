import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fomio from "../assets/fomioLogo.svg";
import { Nav } from "../data";

const Navbar = () => {
  
  const [toggleMenu , setToggleMenu] = useState(false);

  return (
    <nav className="container p-8 mx-auto flex items-center justify-between">
      <Link to="/">
        <img src={Fomio} alt="" className="w-[66px] sm:w-[120px] md:w-[158px]" />
      </Link>
      <ul className="lg:flex hidden gap-12 ">
        {Nav.map((nav) => (
          <li key={nav.name} className="text-white text-xl hidden md:flex hover:text-primary ">
            <a className="cursor-pointer" href={nav.tag}>{nav.name}</a>
          </li>
        ))}
      </ul>
      <button className="hidden lg:flex px-6 py-2 border-solid border-2  hover:bg-primary text-primary hover:text-white border-primary rounded-lg text-xl">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
