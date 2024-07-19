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
    <div className='world-map relative flex justify-center w-full h-screen overflow-hidden'>
        <img ref={img1Ref} className='object-cover absolute' src="/assets/world_map_1.svg" alt="" />
        <img ref={img2Ref} className='object-cover absolute' src="/assets/world_map_2.svg" alt="" />
    </div>
  )
}

export default WorldMap