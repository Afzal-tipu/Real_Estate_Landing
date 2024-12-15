import React from 'react'

// import image
import Image from '../assets/img/house-banner.png';

// import components
import Search from './Search'



const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col  gap-1 items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className=" text-4xl lg:text-[50px] font-semibold leading-none mb-6  dark:text-gray-300">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us
          </h1>
          <p className="max-w-[480px] mb-8  dark:text-gray-300 ">
            Lorem ipsum dolor sit amet. 33 dolore voluptate ut sequi nisi id
            autem harum qui fuga ipsum ea minima nemo sit consequatur quae. Qui
            libero accusantium At odit rerum a soluta dolorum aut consectetur
            doloremque
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="Banner" />
        </div>
      </div>
      <Search />
    </section>
  );
}

export default Banner