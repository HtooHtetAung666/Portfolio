import React, { useState, useEffect } from "react";
import { WiAlien } from "react-icons/wi";
import { Link } from "react-scroll/modules";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (nav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
    setMounted(true);
  }, [nav]);

  if (!mounted) {
    return null;
  }

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-full bg-gradient-to-r from-purple dark:from-rhino-light to-purple-dark dark:to-rhino-dark">
      <div className="flex items-center justify-between w-full h-full px-1 pt-3 md:px-3 lg:px-3 lg:py-0 xl:pr-12">
        {/* logo */}
        <div className="text-black">
          <WiAlien className="w-14 h-14 p-1 md:w-16 md:h-16 lg:w-20 lg:h-20 lg:p-3" />
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4 p-3 md:space-x-5 md:p-4 xl:p-0 xl:space-x-0">
          <ul className="hidden xl:flex items-center p-4">
            <Link
              className="p-5 3xl:p-7"
              activeClass="active"
              to="hobbies"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              <li className="text-sm 3xl:text-md tracking-wide text-cursed-black dark:text-creator-light hover:text-flamingo dark:hover:text-flamingo">
                Hobbies
              </li>
            </Link>
            <Link
              className="p-5 3xl:p-7"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              <li className="text-sm 3xl:text-md tracking-wide text-cursed-black dark:text-creator-light hover:text-flamingo dark:hover:text-flamingo">
                Projects
              </li>
            </Link>
            <Link
              className="p-5 3xl:p-7"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              <li className="text-sm 3xl:text-md tracking-wide text-cursed-black dark:text-creator-light hover:text-flamingo dark:hover:text-flamingo">
                Frameworks
              </li>
            </Link>
            <Link
              className="p-5 3xl:p-7"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
              <li className="text-sm 3xl:text-md tracking-wide text-cursed-black dark:text-creator-light hover:text-flamingo dark:hover:text-flamingo">
                Contact
              </li>
            </Link>
            <a
              href="https://docs.google.com/document/d/1jEGOgE3USzJMOL-9ATZ3C52BVVrlJTszrTAXkYnbmfU/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <li className="text-sm 3xl:text-md tracking-wide p-5 3xl:p-7 text-cursed-black dark:text-creator-light hover:text-flamingo dark:hover:text-flamingo">
                Resume
              </li>
            </a>
          </ul>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              value={theme}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              defaultChecked={theme === "dark"}
            />
            <div className="w-11 h-6 bg-slate-50 ring-1 ring-flamingo rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-50 after:white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-800"></div>
          </label>

          <button className="xl:hidden" onClick={handleNav}>
            <FaBars size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "xl:hidden fixed z-[100] left-0 top-0 w-full min-h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[85%] md:w-[90%] min-h-screen z-[100] bg-slate-50 dark:bg-slate-800 py-5 px-6 ease-in duration-500"
              : "fixed left-[-100%] w-[85%] md:w-[90%] min-h-screen z-[100] top-0 py-5 px-6 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div>
                <WiAlien size={50} className="text-black" />
              </div>
              <div
                className="rounded-full bg-black p-1 cursor-pointer"
                onClick={handleNav}
              >
                <FaTimes size={20} className="text-white" />
              </div>
            </div>
            <div className="border-b border-flamingo my-4">
              <p className="text-center py-4 text-slate-800 dark:text-slate-50">
                Always eager to build something new
              </p>
            </div>
          </div>
          <div className="py-2 flex-col text-slate-800 text-center tracking-wide dark:text-slate-50">
            <ul>
              <Link
                activeClass="active"
                to="hobbies"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Hobbies
                </li>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Frameworks
                </li>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={600}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <a
                href="https://docs.google.com/document/d/1jEGOgE3USzJMOL-9ATZ3C52BVVrlJTszrTAXkYnbmfU/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </a>
            </ul>
            <div className="mt-5">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple dark:from-rhino-light to-purple-dark dark:to-rhino-dark text-center uppercase">
                2022 &copy; | htoohtet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar