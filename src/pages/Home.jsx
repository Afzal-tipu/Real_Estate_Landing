import React from 'react'
import Banner from '../components/Banner'
import HouseList from '../components/HouseList'

const Home = () => {
  return (
    <div className='min-h-[2400px]'>
      <Banner/>
      <HouseList/>
    </div>
  )
}

export default Home