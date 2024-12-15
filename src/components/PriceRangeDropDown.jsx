import { useContext, useState } from "react";
// import icon
import { IoMdWallet } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// import headless UI
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "10000 - 30000",
    },
    {
      value: "30000 - 50000",
    },
    {
      value: "50000 - 100000",
    },
    {
      value: "100000 - 130000",
    },

    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "220000 - 250000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left dark:bg-black"
      >
        <IoMdWallet className="dropdown-icon-primary" />
        <div className=" w-full items-center flex justify-between gap-1">
          <div>
            <div className="text-[18px] font-medium leading-tight">{price}</div>
            <div className="text-[13px]">Choose price range</div>
          </div>

          {isOpen ? (
            <IoIosArrowUp className="dropdown-icon-secondary" />
          ) : (
            <IoIosArrowDown className="dropdown-icon-secondary" />
          )}
        </div>
      </MenuButton>

      <MenuItems className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <MenuItem
              className=" hover:text-violet-700 dark:hover:text-white dark:hover:bg-gray-800 transition cursor-pointer py-2 px-2 rounded-md"
              key={index}
              as="li"
              onClick={() => setPrice(price.value)}
            >
              {price.value}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
};

export default PriceRangeDropdown;
