import React from 'react';

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({house}) => {
const {image, type, country, address, price, bedrooms, bathrooms, surface} = house;


  return (
    <div>
      <div className="bg-white  dark:bg-violet-200 shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[350px] mx-auto cursor-pointer hover:shadow-2xl hover:scale-105 transition">
        <img className="mb-8" src={image} alt="" />
        <div className="mb-4 flex gap-x-4 ">
          <div className="bg-green-600 px-2 text-white rounded-full">
            {type}
          </div>
          <div className="bg-violet-600 px-2 rounded-full text-white">
            {country}
          </div>
        </div>
        <div className="text-lg font-semibold max-w-[260px]">{address}</div>

        <div className="flex gap-x-3 my-3">
          <div className=" flex items-center gap-1 text-gray-600">
            <BiBed />
            <span>{bedrooms}</span>
          </div>
          <div className=" flex items-center gap-1  text-gray-600">
            <BiBath />
            <span>{bathrooms}</span>
          </div>
          <div className=" flex items-center gap-1  text-gray-600">
            <BiArea />
            <span>{surface}</span>
          </div>
        </div>

        <div className="text-violet-700 font-semibold text-lg">$ {price}</div>
      </div>
    </div>
  );
}

export default House