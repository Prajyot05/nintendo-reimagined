import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./console.css";

gsap.registerPlugin(ScrollTrigger);

const Console = () => {
  const consoleRef = useRef(null);

  useEffect(() => {
    const consoleElement = consoleRef.current;

    gsap.set(consoleElement, { autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: consoleElement,
      start: "top 13%", 
      end: "bottom 27%", 
      onEnter: () => gsap.to(consoleElement, { autoAlpha: 1,duration: 0 }),
      onLeave: () => gsap.to(consoleElement, { autoAlpha: 0,duration: 0 }),
      onEnterBack: () => gsap.to(consoleElement, { autoAlpha: 1,duration: 0 }),
      onLeaveBack: () => gsap.to(consoleElement, { autoAlpha: 0,duration: 0 }),
      markers: true
    });
  }, []);



  const games = [
    {
      image: '/assets/gastly-evolution.gif',
      imageico: '/assets/console/game2.png',
      title: 'Detective Pikachu™ Returns',
      description: 'Dive back into Ryme City! Strange events are happening, and only our favorite detective can solve the case. Are you ready for a journey packed with suspense and surprises? Join Pikachu and Tim Goodman as they unravel a new mystery filled with unexpected twists and turns.',
      rating: 4.5,
      downloads: '1 Million +',
    },
    {
      image: 'mario_odyssey.png',
      imageico: '/assets/console/game1.png',
      title: 'Super Mario Odyssey',
      description: 'Join Mario on a massive, globe-trotting 3D adventure! Use his incredible new abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser\'s wedding plans!',
      rating: 4.8,
      downloads: '10 Million +',
    },
    {
      image: 'zelda_breath_of_the_wild.png',
      imageico: '/assets/console/game4.png',
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.',
      rating: 4.9,
      downloads: '15 Million +',
    },
    {
      image: 'splatoon_2.png',
      imageico: '/assets/console/game3.png',
      title: 'Splatoon 2',
      description: 'Ink-splatting action is back and fresher than ever! Get hyped for the return of Splatoon 2, with new stages, new fashions, new weapons, and new ways to play.',
      rating: 4.3,
      downloads: '8 Million +',
    },
  ]; 
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextGame = () => {
      setCurrentIndex((currentIndex + 1) % games.length);
    };
  
    const prevGame = () => {
      setCurrentIndex((currentIndex - 1 + games.length) % games.length);
    };
  
    const selectGame = (index) => {
      setCurrentIndex(index);
    };

  const { image, title, description, rating, downloads } = games[currentIndex];


  return (
    <section className="second-section h-[200vh] flex items-center justify-center">
      <div
        className="sticky top-1/2 transform -translate-y-1/2 z-[100] flex flex-col items-center w-full max-w-5xl p-4 border rounded-md"
        ref={consoleRef}
      >
        <div className="title w-full text-center mb-4">
          <h2 className="text-center text-5xl font-medium text-white">
            {title}
          </h2>
        </div>
        <div className='flex justify-center gap-12 items-center'>
          <div className='flex flex-col items-center justify-center w-1/2 border border-[#bd1515]'>
            <div className="console relative bg-slate-500 h-[14.5rem] w-[22.5rem] flex flex-col justify-center items-center mt-16">
              <div className='nintendoNav absolute top-0 w-full h-8 bg-[#000000b3]'></div>
              <img className="w-full h-full" src={image} alt={title} />
            </div>
            
            <div className="flex gap-4 pt-12 justify-center">
              {games.map((game, index) => (
                <button
                  key={index}
                  className={`p-1 ${currentIndex === index ? 'border-4 border-white' : ''}`}
                  onClick={() => selectGame(index)}
                >
                  <img className="w-16 h-16 rounded" src={game.imageico} alt={game.title} />
                </button>
              ))}
            </div>
          </div> 
          
          <div className='consolePara flex flex-col items-center transform translate-x-12 rounded-xl w-1/2'>
            <div>
              <p className=" w-full p-8 text-[#ffffffb7] text-center">{description}</p>
            </div>
            <button className='button-download uppercase text-white px-8 mb-5 py-2 rounded-md'>
              Download Now
            </button>
          </div>      
        </div>
      </div>
    </section>
  );
}

export default Console;