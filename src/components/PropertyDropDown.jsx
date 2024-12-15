import { useContext, useState } from "react";
// import icon
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// import headless UI
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);



  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <Menu as="div" className="dropdown relative">
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <IoHome className="dropdown-icon-primary" />
        <div className=" w-full items-center flex justify-between gap-1">
          <div>
            <div className="text-[18px] font-medium leading-tight">
              {property}
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
        {properties.map((property, index) => {
          return (
            <MenuItem
              className=" hover:text-violet-700 dark:hover:text-white dark:hover:bg-gray-800 transition cursor-pointer py-2 px-2 rounded-md"
              key={index}
              as="li"
              onClick={() => setProperty(property)}
            >
              {property}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
};

export default PropertyDropdown;
