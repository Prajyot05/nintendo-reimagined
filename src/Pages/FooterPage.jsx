import React, { useEffect } from 'react';
import './FooterPage.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Clouds from '../components/Clouds';

gsap.registerPlugin(ScrollTrigger);

function FooterPage() {

    const footerImages = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 8, 4, 9], [5, 1, 3, 2]]

  useGSAP(() => {

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.part-1',
        start: '50% 50%',
        end: '250% 50%',
        scrub: true,
        pin: true,
      },
    });

    tl.to('.rotate-div', {
      rotate: -15,
      scale: 0.8,
    }, 'a')
      .to('#row-div-2', {
        marginTop: '5%',
      }, 'a')
      .to('#row-div-3', {
        marginTop: '-2%',
      }, 'a')
      .to('#row-div-4', {
        marginTop: '-8%',
      }, 'a')
      .to('.overlay-div h1', {
        opacity: '1',
        delay: 0.2,
      }, 'a')
      .to('.overlay-div', {
        backgroundColor: '#000000b4',
      }, 'a')
      .to('.scrolling', {
        width: '100%',
      }, 'a');

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.part-2',
        start: '0% 70%',
        end: '50% 50%',
        scrub: true,
      },
    });

    tl2.to('.rounded-div-wrapper', {
      height: 0,
      marginTop: '-50px',
    });
  }, []);

  return (
    <div className='footer-page relative pt-40'>
      <div className="part-0 w-full">
        <img className='absolute top-[4%] left-[5%] scale-[0.6]' src="/assets/mega-raquaza.gif" alt="" />
        <h1 className='text-[6rem] text-white font-bold text-center p-10'>News & Events</h1>
        <img className='absolute top-[1%] right-[5%] scale-[0.4]' src="/assets/pokemon-trainer.gif" alt="" />
      </div>
      <div className="part-1 w-full min-h-screen overflow-hidden">
        <div className="content-part-1 flex items-center justify-center w-full h-screen">
          <div className="rotate-div flex justify-center items-start gap-[3vw] w-[200vw] h-[200vh] scale-1">
            {/* {[1, 2, 3, 4].map((num) => ( */}
            {/* <div key={num[0]} id={`row-div-${j}`} className="row-div flex flex-col w-[40vw] h-full"></div> */}
            {footerImages.map((num, k) => (
              <div key={`row-${k}`} id={`row-div-${k + 1}`} className="row-div flex flex-col w-[40vw] h-full">
                {num.map((i, idx) => (
                  <div key={`img-${k}-${idx}-${i}`} className="img-div w-full h-[25%] rounded-xl overflow-hidden">
                    <img className='w-full' src={`/assets/footer_img_${i}.avif`} alt="" />
                  </div>
                ))}
              </div> 
            ))}
          </div>
          <div className="overlay-div flex items-center justify-center text-white absolute w-full h-screen text-[5vw]">
            <h1 className='opacity-0 bg-black p-10 rounded-[30px] bg-opacity-50 uppercase leading-[1] text-center text-[#46BADD]'>Creating smiles <br /><span className='text-[#ED5F55] font-bold'> for generations</span></h1>
            <div className="scroll-down absolute bottom-[8%] flex flex-col justify-center items-center gap-[1vh] text-white">
              {/* <h3>SCROLL DOWN</h3> */}
              <div className="scroll-p w-[8vw] h-[4px] rounded-[50px] bg-[#ffffff55]">
                <div className="scrolling w-[0vw] h-[4px] rounded-[50px] bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="part-2 w-full -mt-[30vh] bg-black">
        <div className="rounded-div-wrapper relative w-full h-[100px] overflow-hidden -mt-[100px]">
          <div style={{transform: 'translate(-50%)'}} className="rounded-div absolute left-1/2 w-[150%] h-[750%] bg-black rounded-[50%]"></div>
        </div>
        <div className="content-2 relative flex items-center w-full bg-black h-[40vh] overflow-hidden">
          
        </div>
      </div>
      {/* <Clouds /> */}
    </div>
  );
}

export default FooterPage;