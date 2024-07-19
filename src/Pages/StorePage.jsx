import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const StorePage = () => {

  useGSAP(() => {
    gsap.from(".store-videos", {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".store-page",
        start: "0% 50%",
        end: "10% 50%",
      }
    })

    gsap.to(".right-vid", {
      paddingRight: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".store-page",
        start: "20% 50%",
        end: "30% 50%"
      }
    })

    gsap.to(".left-vid", {
      paddingLeft: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".store-page",
        start: "30% 50%",
        end: "40% 50%"
      }
    })
  })

  return (
    <div className='store-page relative h-screen p-20'>
      <img className='absolute top-0 left-0' src="/assets/store_blue_switch.svg" alt="" />
      <img className='absolute bottom-0 right-0' src="/assets/store_red_switch.svg" alt="" />

      <div className="store-videos flex w-full justify-center items-center">
        <div className="left-vid overflow-hidden rounded-[30px] opacity-[0.7] h-full -mr-10 pl-64 w-[20vw]">
          <img className='obj-cover' src="/assets/store_left_img.jpg" alt="" />
        </div>
        <div className="main-vid w-[60vw] h-full rounded-[50px] z-10 overflow-hidden">
          <video className='obj-cover' src="/assets/store_vid.webm" loop muted autoPlay></video>
        </div>
        <div className="right-vid rounded-[30px] overflow-hidden h-full opacity-[0.7] -ml-10 pr-64 w-[20vw]">
          <img className='obj-cover' src="/assets/store_right_img.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default StorePage
