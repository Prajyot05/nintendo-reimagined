import React from 'react'
import './Loader.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Loader() {

  return (
    <div className='loader w-full h-screen text-center overflow-hidden z-[1000] absolute'>
      {/* <div className="loader-bg absolute bg-[#ED5F55] left-0 h-full w-full"></div> */}
      <div className="loader-blue absolute left-0 bg-[#46BADD] h-full w-[50vw]"></div>
      <div className="loader-red absolute left-[50vw] bg-[#ED5F55] h-full w-[50vw]"></div>
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