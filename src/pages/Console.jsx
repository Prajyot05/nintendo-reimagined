import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Slider from "../components/Slider"

gsap.registerPlugin(ScrollTrigger);

const mobileGames = [
  { title: 'Detective Pikachu™ Returns', img: '/assets/slider_1_card_logo.png', bg: '/assets/slider_1_bg.jpg', rating: '4.5' },
  { title: 'Super Mario Odyssey', img: '/assets/slider_2_card_logo.png', bg: '/assets/slider_2_bg.jpg', rating: '4.8' },
  { title: 'The Legend of Zelda', img: '/assets/slider_3_card_logo.webp', bg: '/assets/slider_3_bg.jpg', rating: '4.9' },
  { title: 'Super Smash Bros', img: '/assets/slider_4_card_logo.png', bg: '/assets/slider_4_bg.png', rating: '4.8' },
  { title: 'Pokémon Legends: Arceus', img: '/assets/slider_5_card_logo.png', bg: '/assets/slider_5_bg.jpg', rating: '4.6' },
];

const Console = () => {
  const consoleRef = useRef(null);

  useEffect(() => {
    const consoleElement = consoleRef.current;

    gsap.set(consoleElement, { autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: consoleElement,
      start: "top 0%", 
      end: "bottom 27%", 
      onEnter: () => gsap.to(consoleElement, { autoAlpha: 1, duration: 0 }),
      onLeave: () => gsap.to(consoleElement, { autoAlpha: 0, duration: 0 }),
      onEnterBack: () => gsap.to(consoleElement, { autoAlpha: 1, duration: 0 }),
      onLeaveBack: () => gsap.to(consoleElement, { autoAlpha: 0, duration: 0 }),
    });
  }, []);

  return (
    <section className='second-section w-full text-white z-[101]'>
      {/* Desktop: Full 3D Slider */}
      <div className="hidden lg:block h-[250vh]">
        <div ref={consoleRef} className='sticky top-0 left-0 z-[101]'>
          <Slider />
        </div>
      </div>

      {/* Mobile: Horizontal Card Carousel */}
      <div className="lg:hidden py-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
          Popular <span style={{ color: '#ED5F55' }}>Games</span>
        </h2>
        <p className="text-gray-400 text-center text-sm mb-8">Swipe to explore</p>
        
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {mobileGames.map((game, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[75vw] sm:w-[50vw] md:w-[40vw] snap-center rounded-2xl overflow-hidden relative group"
              style={{ aspectRatio: '3/4' }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${game.bg})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-white text-xs font-semibold">{game.rating}</span>
                  </div>
                </div>
                <h3 className="text-white text-lg font-bold">{game.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Console
