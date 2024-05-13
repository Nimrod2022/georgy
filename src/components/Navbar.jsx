import { Link } from "react-scroll";
import React, { useEffect } from "react";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const darkIcon = "/assets/dark-theme-icon.svg";
const lightIcon = "/assets/light-theme-icon.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  //  Sticky nav handling
  const [scrolled, setScrolled] = useState(false);
  const [bgColor, setBgColor] = useState(darkMode ? "#151C25" : "#F0F0F4");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Update the background color based on the current dark mode
    setBgColor(darkMode ? "#151C25" : "#F0F0F4");

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY > 10) setBgColor(darkMode ? "#26313F" : "#d6d7dc");
      else setBgColor(darkMode ? "#1A1A1A" : "#E0E8F6");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header className={`${scrolled ? "stickynav" : ""}`}>
        <div
          className="md:py-2 py-3 relative"
          style={{ backgroundColor: bgColor }}
        >
          <nav className="flex justify-between items-center md:items-center  text-lg px-8 md:px-36  md:py-4">
            <div>
              <Link to="/#" smooth={true} duration={700}>
                <h1 className="oleo text-[#000000] dark:text-white md:text-3xl">Georgy</h1>
                {/* <img
                  src={darkMode ? logoDarkMode : logoLightMode}
                  alt="logo"
                  className="hover:cursor-pointer size-10  md:size-12"
                /> */}
              </Link>
            </div>

            <div className="flex gap-10 montserrat">
              <ul className="flex dark:text-[#C1C1C1] text-[#050505]">
                <li>
                  <Link to="/home" smooth={true} duration={1000}>
                    <button
                      type="button"
                      className=" text-[#4FC3F7] text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/about" smooth={true} duration={1000}>
                    <button
                      type="button"
                      className="  text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
                    >
                      About
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/projects" smooth={true} duration={1000}>
                    <button
                      type="button"
                      className=" text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
                    >
                      Projects
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/resume" smooth={true} duration={1000}>
                    <button
                      type="button"
                      className="   text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
                    >
                      Resume
                    </button>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex gap-20">
              <Link to="/contact" smooth={true} duration={700}>
                <button
                  type="button"
                  className="border border-[#484E53] dark:border-[#4FC3F7] text-[#484E53] dark:text-white  text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
                >
                  Contact
                </button>
              </Link>

              <button className=" size-6 md:size-auto ">
                <img
                  src={darkMode ? lightIcon : darkIcon}
                  alt="theme"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                />
              </button>
            </div>

            {/* Sidebar to cover entire screen */}

            <div className="sm:hidden block z-10">
              {isOpen ? (
                <AiOutlineClose
                  className="text-3xl dark:text-[#55E5A4] text-[d6d7dc]"
                  onClick={toggleNav}
                />
              ) : (
                <BiMenuAltRight
                  className="text-4xl dark:text-[#55E5A4] text-[#26313F]"
                  onClick={toggleNav}
                />
              )}
            </div>
            {/*Mobile menu /> */}
            <div
              className={
                isOpen
                  ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center text-center  w-full h-screen bg-[#000]/85 text-[#55E5A4] duration-300 ease-in-out"
                  : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center text-center w-full h-screen  bg-[#000]/85 text-white duration-300 ease-in-out"
              }
            >
              <ul onClick={toggleNav}>
                <Link
                  to="/#"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleNav}
                >
                  <li className="p-4">Home</li>
                </Link>
                <Link
                  to="/about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleNav}
                >
                  <li className="p-4">About</li>
                </Link>

                <Link
                  to="/projects"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleNav}
                >
                  <li className="p-4">Projects</li>
                </Link>

                <Link
                  to="/contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleNav}
                >
                  <li className="p-4 text-white">Contact</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
