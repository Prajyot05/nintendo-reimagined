import React, { useEffect, useRef } from 'react';

function HomePage() {
  return (
    <div className='relative home w-full h-screen flex justify-center items-center z-10'>
        <img className='absolute top-0 left-0 object-cover' src="/assets/grid_left.svg" alt="" />
        <img className='absolute top-0 right-0 object-cover' src="/assets/grid_right.svg" alt="" />
        <h1 className='text-white text-[3.5rem] xs:text-[4.5rem] md:text-[8rem] lg:text-[12rem] text3d z-10 tracking-wide'>NINTENDO</h1>
    </div>
  )
}

export default HomePage;