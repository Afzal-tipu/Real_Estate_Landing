import React, {useState, useEffect, useContext} from 'react'

//import context
import { HouseContext } from './HouseContext';
// import link
import { Link } from 'react-router-dom';
// import logo
import LogoWhite from '../assets/img/logoWhite.svg';
import LogoDark from '../assets/img/logoDark.svg'
//import theme icons
import { RiMoonFill } from "react-icons/ri";
import { RiSunFill } from "react-icons/ri";

const Header = () => {

  const { theme, setTheme, handleThemeSwitch} = useContext(HouseContext);


  return (
    <div className="w-full sticky top-0 z-20 bg-white dark:bg-black">
      <header className="py-6 mb-12 border-b  ">
        <div className="container mx-auto flex justify-between items-center">
          {/* ====Logo===== */}
          <Link to="/">
            {theme === "light" ? (
              <img src={LogoWhite} alt="Logo" className="dark:" />
            ) : (
              <img src={LogoDark} alt="Logo" className="dark:" />
            )}
          </Link>

          {/* =====Button===== */}

          {/* ====== Theme Button ===== */}
          <div></div>

          <div className="flex items-center gap-4 lg:gap-8 justify-center">
            <button
              className="bg-violet-500 px-1 py-1 xl:px-2 xl:py-2 text-lg rounded-full text-white"
              onClick={handleThemeSwitch}
            >
              {theme === "light" ? <RiMoonFill /> : <RiSunFill />}
            </button>

            <Link
              className=" hover:text-violet-900 hover:scale-105 text-sm lg:text-lg font-semibold dark:text-white"
              to=""
            >
              Login
            </Link>
            <Link
              className="bg-violet-600 hover:bg-violet-700 hover:scale-105 transition text-white text-sm lg:text-lg py-2 px-2 xl:px-4 border rounded-lg font-semibold"
              to=""
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header