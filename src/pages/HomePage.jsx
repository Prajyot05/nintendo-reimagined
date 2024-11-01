import React, { useEffect, useRef } from 'react';

function HomePage() {
  return (
    <div className='relative home w-full h-screen flex justify-center items-center z-10'>
        <img className='absolute top-0 left-0 object-cover' src="/assets/grid_left.svg" alt="" />
        <img className='absolute top-0 right-0 object-cover' src="/assets/grid_right.svg" alt="" />
        <h1 className='text-white text-[3.5rem] md:text-[8rem] lg:text-[12rem] text3d z-10 tracking-wide'>NINTENDO</h1>
        {/* <div className="sm:hidden flex items-start mt-[10rem] justify-center absolute z-[33]">
          <img className='w-[20rem]' src="/assets/switch.png"/>
        </div> */}
    </div>
  )
}

export default HomePage;