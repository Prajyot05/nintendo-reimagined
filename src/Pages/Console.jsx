import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from "../components/Slider"

gsap.registerPlugin(ScrollTrigger);

const Console = () => {
  const consoleRef = useRef(null);

  useEffect(() => {
    const consoleElement = consoleRef.current;

    gsap.set(consoleElement, { autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: consoleElement,
      start: "top 0%", 
      end: "bottom 27%", 
      onEnter: () => gsap.to(consoleElement, { autoAlpha: 1,duration: 0 }),
      onLeave: () => gsap.to(consoleElement, { autoAlpha: 0,duration: 0 }),
      onEnterBack: () => gsap.to(consoleElement, { autoAlpha: 1,duration: 0 }),
      onLeaveBack: () => gsap.to(consoleElement, { autoAlpha: 0,duration: 0 }),
      // markers: true
    });
  }, []);

  return (
    <section className='second-section h-[250vh] w-full text-white z-[101]'>
      <div ref={consoleRef} className=' sticky top-0 left-0 z-[101]'>
        <Slider />
      </div>
      
    </section>
  )
}

export default Console
