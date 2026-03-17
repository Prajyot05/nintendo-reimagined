import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'

function WorldMap() {

    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const mobileImgRef = useRef(null);

    const offices = [
      { name: 'Kyoto, Japan', desc: 'Global Headquarters', top: '38%', left: '82%' },
      { name: 'Redmond, USA', desc: 'Nintendo of America', top: '32%', left: '15%' },
      { name: 'Frankfurt, Germany', desc: 'Nintendo of Europe', top: '30%', left: '52%' },
      { name: 'Melbourne, Australia', desc: 'Nintendo Australia', top: '72%', left: '86%' },
      { name: 'Seoul, South Korea', desc: 'Nintendo Korea', top: '37%', left: '79%' },
      { name: 'Toronto, Canada', desc: 'Nintendo Canada', top: '30%', left: '22%' },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        
        tl.to(img1Ref.current, { duration: 0.5, zIndex: 1 })
        .to(img2Ref.current, { duration: 0.1, zIndex: 0 })
        .to(img1Ref.current, { duration: 0.1, zIndex: 0 })
        .to(img2Ref.current, { duration: 0.1, zIndex: 1 });

        // Fade in the map section on scroll
        gsap.from('.world-map-page', {
          opacity: 0,
          y: 60,
          duration: 1,
          scrollTrigger: {
            trigger: '.world-map-page',
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          }
        });

        // Animate dots in sequence
        gsap.from('.office-dot', {
          scale: 0,
          opacity: 0,
          stagger: 0.15,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.world-map',
            start: 'top 60%',
          }
        });
    })

  return (
    <div className="world-map-page">
      <div className="world-map-page-text relative text-center p-5 md:p-20">
        <h1 className='text-[2rem] md:text-[4rem] text-white font-bold'>OUR OFFICES</h1>
        <p className='text-sm md:text-lg px-0 md:px-10 lg:px-64 pt-5'>Our global teams at Nintendo are home to individuals from diverse backgrounds and cultures. We believe in transparency, open communication, and spending time with one another. While all teams have their own unique traits, it's the underlying culture, shared values, and love for games that keep us together.</p>
      </div>
      <div className='world-map relative flex justify-center w-full min-h-screen overflow-hidden'>
          <img ref={img1Ref} className='object-cover hidden sm:block absolute' src="/assets/world_map_1.svg" alt="" />
          <img ref={img2Ref} className='object-cover hidden sm:block absolute' src="/assets/world_map_2.svg" alt="" />
          <img ref={mobileImgRef} className='object-cover sm:hidden absolute pt-10' src="/assets/world-map-mobile.svg" alt="" />
          
          {/* Interactive office location dots */}
          <div className="office-dots hidden sm:block absolute inset-0">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="office-dot group absolute z-10"
                style={{ top: office.top, left: office.left }}
              >
                <div className="relative">
                  {/* Pulsing ring */}
                  <div className="absolute -inset-2 rounded-full bg-[#ED5F55] opacity-30 animate-ping"></div>
                  {/* Dot */}
                  <div className="relative w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ED5F55] border-2 border-white shadow-lg cursor-pointer transition-transform duration-300 group-hover:scale-150"></div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
                    <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl whitespace-nowrap text-center border border-white/10">
                      <p className="font-bold text-sm">{office.name}</p>
                      <p className="text-xs text-[#46BADD]">{office.desc}</p>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 rotate-45 -mt-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default WorldMap