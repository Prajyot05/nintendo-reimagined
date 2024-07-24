import React, { useContext } from 'react'
import './Loader.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { LoadingContext } from '../context/LoadingContext'

function Loader() {
  const {isLoading, setIsLoading} = useContext(LoadingContext);
  const handleClick = () => {
        if (isLoading) {
            gsap.to(".nav-mid img", {
                width: '3.5rem',
                marginTop: '0',
                duration: 1,
                ease: 'power4.out',
            }, 'load');

            gsap.to(".loader-blue", {
                y: 1000,
                duration: 1,
                delay: 1,
                ease: "power4.out"
            }, 'load');

            gsap.to(".loader-red", {
                y: -1000,
                duration: 1,
                delay: 1,
                ease: "power4.out",
                onComplete: () => {
                    setIsLoading(false);
                    setIsAnimating(false);
                    gsap.to(".loader", {
                        display: 'none'
                    });
                }
            }, 'load');

            gsap.to(".click-here", {
              opacity: 0,
              // display: 'none',
              duration: 0.5,
              ease: 'power4.out',
            }, 'load')
        }
  }
  return (
    <div className='loader w-full h-screen text-center overflow-hidden z-[1000] absolute'>
      {/* <div className="loader-bg absolute bg-[#ED5F55] left-0 h-full w-full"></div> */}
      <div className="loader-blue absolute left-0 bg-[#46BADD] h-full w-[50vw]"></div>
      <div className="loader-red absolute left-[50vw] bg-[#ED5F55] h-full w-[50vw]"></div>
      <h1 onClick={handleClick} className='click-here absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] bg-black bg-opacity-30 px-5 py-2 hover:bg-opacity-70 transition-all ease-in-out duration-200 rounded-[30px] text-white'>Click Here</h1>
      {/* <div class="words h-[80vh] flex items-center justify-center">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div> */}
    </div>
  )
}

export default Loader