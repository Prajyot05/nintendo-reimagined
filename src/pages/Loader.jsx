import React, { useContext, useEffect, useRef } from 'react'
import './Loader.css'
import gsap from 'gsap'
import { LoadingContext } from '../context/LoadingContext'

function Loader() {
  const { isLoading } = useContext(LoadingContext);
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    // Animate the Nintendo Switch logo entrance
    gsap.fromTo(logoRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: 'back.out(1.7)', delay: 0.3 }
    );

    // Pulse animation for the logo
    gsap.to(logoRef.current, {
      filter: 'drop-shadow(0 0 20px rgba(70, 186, 221, 0.8)) drop-shadow(0 0 40px rgba(237, 95, 85, 0.6))',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.5
    });

    // Animate the progress bar
    gsap.to(progressRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'power2.inOut',
      delay: 0.5
    });

    // Animate the loading text
    gsap.fromTo('.loader-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.8 }
    );

    // Shimmer effect on text
    gsap.to('.loader-shimmer', {
      backgroundPosition: '200% center',
      duration: 2,
      repeat: -1,
      ease: 'linear',
      delay: 1.2
    });

  }, []);

  return (
    <div ref={loaderRef} className='loader w-full h-screen text-center overflow-hidden z-[1000] absolute'>
      <div className="loader-blue absolute left-0 bg-[#46BADD] h-full w-[50vw]"></div>
      <div className="loader-red absolute left-[50vw] bg-[#ED5F55] h-full w-[50vw]"></div>

      {/* This is nice but not really needed */}
      {/* <div className="loader-content absolute inset-0 flex flex-col items-center justify-center z-10">
        <div ref={logoRef} className="loader-logo mb-8">
          <img
            src="/assets/nintendo_switch_logo.svg"
            alt="Nintendo Switch"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>

        <div className="loader-text flex flex-col items-center gap-4">
          <h2 className="loader-shimmer text-2xl md:text-4xl font-bold text-white tracking-[0.3em] uppercase"
            style={{
              background: 'linear-gradient(90deg, #fff 0%, #fff 40%, #46BADD 50%, #fff 60%, #fff 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
            NINTENDO
          </h2>

          <div className="loader-progress-container w-48 md:w-64 h-1 bg-white/20 rounded-full overflow-hidden mt-4">
            <div
              ref={progressRef}
              className="loader-progress h-full w-0 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #46BADD, #ED5F55)',
              }}
            ></div>
          </div>

          <p className="text-white/60 text-sm tracking-widest mt-2 uppercase">Loading Experience</p>
        </div>
      </div> */}
    </div>
  )
}

export default Loader