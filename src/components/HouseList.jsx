import React, {useContext} from 'react';
import { ImSpinner3 } from "react-icons/im";
import { HiOutlineEmojiSad } from "react-icons/hi";

// import context
import { HouseContext } from './HouseContext';

// import components
import House from './House';

// import Link
import { Link } from 'react-router-dom';

const HouseList = () => {
const {houses, loading} = useContext(HouseContext);

// if loading is true
if (loading){
  return (<ImSpinner3 className=' text-violet-700 text-6xl mx-auto mt-[250px] animate-spin'/>);

};

if (houses.length <1){
  return (
    <div className="w-full flex flex-col items-center mx-auto mt-[250px] text-gray-400 text-4xl">
      <HiOutlineEmojiSad className='text-[100px]' />
      <div className=" ">Sorry, nothing found</div>
    </div>
  );
}



  return (
    <section className='mb-20'>
      <div className='container mx-auto'> 
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 lg:gap-16'>
          {houses.map((house, index)=>{
            return(
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house}/>
              </Link>
            )

          })}
        </div>
      </div>
    </section>
  );
}

export default HouseList