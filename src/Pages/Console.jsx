import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Console = () => {
  const consoleRef = useRef(null);

  useEffect(() => {
    const consoleElement = consoleRef.current;

    gsap.set(consoleElement, { autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: consoleElement,
      start: "top 0%", // Adjust this value as needed
      end: "bottom -40%", // Adjust this value as needed
      onEnter: () => gsap.to(consoleElement, { autoAlpha: 1,duration: 0 }),
      onLeave: () => gsap.to(consoleElement, { autoAlpha: 0,duration: 0 }),
      onEnterBack: () => gsap.to(consoleElement, { autoAlpha: 1,duration: 0 }),
      onLeaveBack: () => gsap.to(consoleElement, { autoAlpha: 0,duration: 0 }),
      markers: true // Remove or set to false in production
    });
  }, []);

  return (
    <section className="second-section h-[200vh]">
      <div
        className="console bg-white sticky h-[29rem] w-[32rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100] flex flex-col justify-center items-center"
        ref={consoleRef}
      >
        Console Content
      </div>
    </section>
  );
}

export default Console;
