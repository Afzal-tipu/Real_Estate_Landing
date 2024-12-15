import {useContext, useState} from 'react'
// import icon
import { LuMapPin } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// import headless UI 
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/react';
import { HouseContext } from './HouseContext';

const CountryDropdown = () => {

  const {country, setCountry, countries} = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <Menu as="div" className="dropdown relative">
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <LuMapPin className="dropdown-icon-primary" />
        <div className=" w-full items-center flex justify-between gap-1">
          <div>
            <div className="text-[18px] font-medium leading-tight">
              {country}
            </div>
            <div className="text-[13px]">Select Your Place</div>
          </div>

          {isOpen ? (
            <IoIosArrowUp className="dropdown-icon-secondary" />
          ) : (
            <IoIosArrowDown className="dropdown-icon-secondary" />
          )}
        </div>
      </MenuButton>

      <MenuItems className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <MenuItem
              className=" hover:text-violet-700 transition cursor-pointer"
              key={index}
              as="li"
              onClick={() => setCountry(country)}
            >
              {country}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}

export default CountryDropdown