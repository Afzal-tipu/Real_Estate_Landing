import React from 'react'

//import data
import { housesData} from '../data';

//import use params
import { useParams } from 'react-router-dom';

//import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

// import link
import { Link } from 'react-router-dom';


const PropertyDetails = () => {

  // get the house id
  const {id} = useParams();


  // get the house based on id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);

  })

  return (
    <section>
      <div className="container lg:min-w-[1024px] mx-auto min-h-screen ">
        <div className="flex flex-col justify-start items-start lg:flex-row lg:justify-between lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold  dark:text-gray-300">
              {house.name}
            </h2>
            <h3 className="text-lg mb-4  dark:text-gray-300">
              {house.address}
            </h3>
          </div>

          <div className="flex gap-5 mb-4 lg:mb-0 ">
            <div className="bg-green-600 px-3 text-white rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-600 px-3 rounded-full text-white">
              {house.country}
            </div>
          </div>

          <div className="text-violet-700 font-semibold text-3xl mb-4 lg:mb-0  dark:text-violet-400">
            $ {house.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className=" w-full xl:max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="Image" />
            </div>
            <div className="flex flex-col lg:flex-row gap-y-1 gap-x-3 my-3">
              <div className=" text-xl flex items-center gap-1 text-violet-400">
                <BiBed />
                <span>{house.bedrooms}</span>
              </div>
              <div className=" text-xl flex items-center gap-1  text-violet-400">
                <BiBath />
                <span>{house.bathrooms}</span>
              </div>
              <div className="text-xl flex items-center gap-1 text-violet-400">
                <BiArea />
                <span>{house.surface}</span>
              </div>
            </div>
            <div className="mt-4  dark:text-gray-300">{house.description}</div>
          </div>
          <div className="bg-white dark:bg-violet-200 flex-1 w-full lg:min-w-[350px] mb-8 border border-gray-300 rounded-lg px-4 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-24 h-24 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div>
                <div className="text-lg font-bold">{house.agent.name}</div>
                <Link to="" className="text-sm text-violet-700">
                  View Listing
                </Link>
              </div>
            </div>
            {/* ===== form ====== */}

            <form className="flex flex-col gap-4">
              <input
                className="border border-gray-300 dark:bg-violet-50 focus:border-violet-700 outline-none rounded-md w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-gray-300  dark:bg-violet-50 focus:border-violet-700 outline-none rounded-md w-full px-4 h-14 text-sm"
                type="text"
                placeholder="email"
              />
              <input
                className="border border-gray-300  dark:bg-violet-50 focus:border-violet-700 outline-none rounded-md w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone"
              />
              <textarea
                className="border border-gray-300  dark:bg-violet-50 focus:border-violet-700 outline-none resize-none rounded-md w-full p-4 h-36 text-sm text-gray-500"
                placeholder="Message"
                defaultValue={"Hello, I am interested in [Modern apartment]"}
              ></textarea>
              <div className="flex gap-x-3">
                <button className="w-full border border-violet-700 bg-violet-700  dark:bg-violet-900 text-white px-3 py-2 rounded-lg hover:bg-violet-600 transition">
                  Send message
                </button>
                <button className="w-full border border-violet-700 text-violet-900 dark:text-gray-900 px-4 py-2 rounded-lg hover:text-violet-600 hover:border-violet-600 transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails