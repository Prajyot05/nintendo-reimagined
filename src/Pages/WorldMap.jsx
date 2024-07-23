import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'

function WorldMap() {

    const img1Ref = useRef(null);
    const img2Ref = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true});
        
        tl.to(img1Ref.current, { duration: 0.5, zIndex: 1 })
        .to(img2Ref.current, { duration: 0.1, zIndex: 0 })
        .to(img1Ref.current, { duration: 0.1, zIndex: 0 })
        .to(img2Ref.current, { duration: 0.1, zIndex: 1 });
    })

  return (
    <div className="world-map-page">
      <div className="world-map-page-text relative text-center p-20">
        <h1 className='text-[2.5rem] md:text-[4rem] text-white font-bold'>OUR OFFICES</h1>
        <p className='text-md md:text-lg px-0 md:px-10 lg:px-64 pt-5'>Our global teams at Nintendo are home to individuals from diverse backgrounds and cultures. We believe in transparency, open communication, and spending time with one another. While all teams have their own unique traits, it’s the underlying culture, shared values, and love for games that keep us together.</p>
      </div>
      <div className='world-map relative flex justify-center w-full h-[50vh] md:min-h-screen overflow-hidden'>
          <img ref={img1Ref} className='object-cover absolute' src="/assets/world_map_1.svg" alt="" />
          <img ref={img2Ref} className='object-cover absolute' src="/assets/world_map_2.svg" alt="" />
      </div>
    </div>
  )
}

export default WorldMap