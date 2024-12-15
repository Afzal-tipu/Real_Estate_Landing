import React, { useContext } from 'react'
// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropDown from './PropertyDropDown';
import PriceRangeDropDown from './PriceRangeDropDown';

//import icons
import { IoSearch } from "react-icons/io5";
import { HouseContext } from './HouseContext';


const Search = () => {

  const {handleClick} = useContext(HouseContext)

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white dark:bg-transparent lg:bg-transparent lg:backdrop-blur rounded-lg  dark:text-gray-300 ">
      <CountryDropdown />
      <PropertyDropDown />
      <PriceRangeDropDown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 w-full lg:max-w-[162px] h-16 flex justify-center items-center text-white text-2xl rounded-lg font-semibold hover:bg-violet-800 transition hover:scale-105"
      >
        <IoSearch />
      </button>
    </div>
  );
}

export default Search