import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ThemeChanger from "./ThemeChanger";
import logo from "../assets/images/logor.png";
import resume from "../assets/resume-6-24.pdf";
const Header = () => {
  const [navState, setNavState] = useState(false);
  const [open, setOpen] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const downloadResume = () => {
    
  
  }

  return (
    <div
      className={`${
        !navState
          ? "absolute top-7 left-0 right-0 opacity-100 z-30 flex justify-between px-7 md:px-8 dark:border-gray-700"
          : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-between opacity-100 z-[200] blur-effect-theme dark:bg-gray-600/50"
      }`}
    >
      {/* Logo section */}
      <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
        <Link to="home" spy={true} smooth={true} duration={500}>
          <span
            className={`text-white text-2xl md:text-2xl lg:text-3xl dark:text-gray-800`}
          >
            {"<Atharva Rakshak/>"}
          </span>
        </Link>
      </div>
      {/* Menu icon */}
      <div
        onClick={toggleMenu}
        className="absolute right-10 cursor-pointer md:hidden w-32 h-8 flex items-center"
        style={{ zIndex: 100 }}
      >
        {open ? (
          <div className="flex items-center">
            <ThemeChanger />
            <XMarkIcon className="w-8 ml-4" />
          </div>
        ) : (
          <div className="flex items-center">
            <ThemeChanger />
            <Bars3BottomRightIcon className="w-8 ml-4" />
          </div>
        )}
      </div>

      {/* Link items */}
      <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-1000 ease-out ${
          open ? "top-12 z-[-1] dark:bg-gray-800 bg-gray-300  bg-opacity-100 md:bg-transparent" : "  top-[-490px]"
        }`}
        style={{ zIndex: 90 }}
      >
        
        <li className="md:ml-8 md:my-0 my-7 font-semibold">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400 duration-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li className="md:ml-8 md:my-0 my-7 font-semibold">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100} // Adjust the offset as per your needs
            duration={500}
            className="text-white hover:text-blue-400 duration-500"
            onClick={toggleMenu}
          >
            About me
          </Link>
        </li>
        <li className="md:ml-8 md:my-0 my-7 font-semibold">
          <Link
            to="project"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400 duration-500"
            onClick={toggleMenu}
          >
            Project
          </Link>
        </li>
        <li className="md:ml-8 md:my-0 my-7 font-semibold">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400 duration-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
        <a
          href={resume} 
          download
          className="hover:text-blue-500 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-300 md:static"
        >
          Resume
        </a>
        <div className={`${!open ? "mr-2 ml-2" : "hidden duration-100"}`}>
          <ThemeChanger />
        </div>
      </ul>
    </div>
  );
};

export default Header;
