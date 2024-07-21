import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { StoreCard } from '../components/StoreCard'
import "./StorePage.css"
// import RaquazaModel from '../components/RaquazaModel'

const StorePage = () => {

  useGSAP(() => {
    gsap.from(".store-videos", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".store-page",
        start: "0% 50%",
        end: "10% 50%"
      }
    })

    gsap.to(".right-vid", {
      paddingRight: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".store-page",
        start: "10% 50%",
        end: "20% 50%"
      }
    })

    gsap.to(".left-vid", {
      paddingLeft: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".store-page",
        start: "20% 50%",
        end: "30% 50%"
      }
    })
  })

  return (
    <div className='store-page relative px-20 pt-20'>
      <img className='absolute top-0 left-0' src="/assets/store_blue_switch.svg" alt="" />
      <img className='absolute bottom-0 right-0' src="/assets/store_red_switch.svg" alt="" />

      <div className="store-videos flex w-full justify-center items-center">
        <div className="left-vid overflow-hidden rounded-[30px] opacity-[0.7] h-full -mr-10 pl-64 w-[20vw]">
          <img className='obj-cover' src="/assets/store_left_img.jpg" alt="" />
        </div>
        <div className="main-vid w-[60vw] h-full rounded-[50px] z-10">
          <video className='obj-cover rounded-[50px]' src="/assets/store_vid.webm" loop muted autoPlay></video>
        </div>
        <div className="right-vid rounded-[30px] overflow-hidden h-full opacity-[0.7] -ml-10 pr-64 w-[20vw]">
          <img className='obj-cover' src="/assets/store_right_img.jpg" alt="" />
        </div>
      </div>

      <div className="store-vid-title w-full text-center py-20">
        <h3 className='text-[3rem]'>Play anytime, anywhere with</h3>
        <h1 className='text-[4rem] font-bold text-white white-glow-effect'>NINTENDO SWITCH</h1>
      </div>

      <div className="store-explore relative mt-32 pt-10 m-auto w-[90%] rounded-t-[120px] flex flex-col items-center">
        <img className='absolute -top-24 left-32 w-[6rem]' src="/assets/store_mario.png" alt="" />
        <img className='absolute -top-10 right-40 w-[3rem]' src="/assets/store_mushroom.png" alt="" />
        <img className='absolute -top-10 right-64 w-[3rem]' src="/assets/store_mushroom.png" alt="" />
        {/* <h3 className='text-[2.5rem] w-1/2 text-white text-center'> */}
          {/* Find the 
          <span className='text-[#46BADD]'> Perfect System <br /></span>
          for your  */}
          {/* Gaming Needs. */}
          <div className="store-text-wrapper text-[2.5rem] text-white text-center">
            <h4 className='text-[2rem]'>Find the <span className='text-[#46BADD]'> Perfect System </span> for your</h4>
            {/* <span className='text-[#46BADD]'> Perfect System </span> */}
            {/* for your */}
            <div className="top">Gaming Needs</div>
            <div className="bottom" aria-hidden="true">Gamind Needs</div>
          </div>
        {/* </h3> */}
        <div className="switch-models flex -mt-36 scale-[0.6] gap-10">
          <StoreCard num={1} text={"Nintendo Switch OLED"} />
          <StoreCard num={2} text={"Nintendo Switch"} />
          <StoreCard num={3} text={"Nintendo Switch Lite"} />
        </div>
        <button className="button-86 w-[10%] mb-64 text-white font-semibold" role="button">Explore Now</button>
        {/* <RaquazaModel /> */}
        {/* <img className='absolute scale-75 left-20' loop muted autoPlay src="https://media.tenor.com/PznY9aV9pcEAAAAi/mega-rayquaza-rayquaza.gif" /> */}
        <img className='absolute bottom-0 left-[30%]' src="/assets/gastly-evolution.gif" alt="" />
      </div>
    </div>
  )
}

export default StorePage
