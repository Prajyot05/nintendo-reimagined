import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Slider() {

    useGSAP(() => {
        gsap.from(".list .item .content", {
            // scrollTrigger: {
            //     trigger: '.slider-container',
            //     start: '20% 50%',
            //     end: '50% 50%',
            // },
            y:100,
            opacity:0,
            filter: 'blur(20px)',
            duration: 1,
        })
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [thumbnails, setThumbnails] = useState(['thumbnail_1.png', 'thumbnail_2.png', 'thumbnail_3.png']);
    const thumbnailsRef = useRef([]);
    const carouselItemsRef = useRef([]);

    useGSAP(() => {
        gsap.set(carouselItemsRef.current, { autoAlpha: 0 });
        gsap.set(carouselItemsRef.current[activeIndex], { autoAlpha: 1 });
      }, [activeIndex]);
    
      const handleThumbnailClick = (index) => {
        if (index === activeIndex) return;
    
        const currentItem = carouselItemsRef.current[activeIndex];
        const newItem = carouselItemsRef.current[index];
        const newThumbnail = thumbnailsRef.current[index];
    
        const tl = gsap.timeline();
    
        // Animate the new item on top of the current one
        tl.set(newItem, { autoAlpha: 1, zIndex: 20, position: 'absolute' });
    
        tl.fromTo(newItem, {
        //   x: newThumbnail.offsetLeft - newItem.offsetLeft,
          x: newThumbnail.offsetLeft + 200,
          y: newThumbnail.offsetTop - (newItem.offsetTop - 200),
        //   y: newThumbnail.offsetTop,
            // scale: newThumbnail.clientWidth / newItem.clientWidth,
            scale: 0,
        }, {
          duration: 0.7,
          
          x: 0,
          y: 0,
          scale: 1,
          ease: "power3.inOut",
        }, 'a');
    
        tl.to(newThumbnail, {
            duration: 0.4,
            autoAlpha: 0,
            onComplete: () => {
                const updatedThumbnails = [...thumbnails];
                const [movedThumbnail] = updatedThumbnails.splice(index, 1);
                updatedThumbnails.push(movedThumbnail);
                setThumbnails(updatedThumbnails);
                gsap.set(newThumbnail, { autoAlpha: 1 });
          }
        }, 'a');

    setActiveIndex(index);
};

  return (
    <div className='slider-container bg-gray-500 w-full h-screen relative'>
      <div className="carousel w-full h-screen overflow-hidden relative">
        <div className="list w-full h-full relative">
          {['slider_1.png', 'slider_2.png', 'slider_1.png'].map((src, index) => (
            <div
              key={index}
              className={`item absolute inset-0 ${index === activeIndex ? 'z-10' : ''}`}
              ref={el => carouselItemsRef.current[index] = el}
            >
              <img className='w-full h-full object-cover' src={`/assets/${src}`} alt="" />
              <div className="content absolute top-1/2 left-48 -translate-x-1/2 -translate-y-1/2">
                <div className="title text-6xl">Content {index + 1}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail absolute bottom-10 right-10 w-max flex items-center z-20">
          {/* {['thumbnail_1.png', 'thumbnail_2.png', 'thumbnail_3.png'].map((src, index) => ( */}
          {thumbnails.map((src, index) => (
            <div
              key={index}
              className="item flex-shrink-0 cursor-pointer"
              onClick={() => handleThumbnailClick(index)}
              ref={el => thumbnailsRef.current[index] = el}
            >
              <img className='w-full h-full object-cover' src={`/assets/${src}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider

/*
    <div className='slider-container bg-gray-500 w-full h-screen'>
        <div className="carousel w-full h-screen overflow-hidden relative">
            <div className="list">
                <div className="item absolute inset-x-0 inset-y-0 z-10">
                    <img className='w-full h-full object-cover' src="/assets/slider_1.png" alt="" />
                    <div className="content absolute top-1/2 left-48 -translate-x-1/2 -translate-y-1/2">
                        <div className="title text-6xl">Content 1</div>
                    </div>
                </div>
                <div className="item absolute inset-x-0 inset-y-0">
                    <img className='w-full h-full object-cover' src="/assets/slider_2.png" alt="" />
                    <div className="content absolute top-1/2 left-48 -translate-x-1/2 -translate-y-1/2">
                        <div className="title text-6xl">Content 1</div>
                    </div>
                </div>
                <div className="item absolute inset-x-0 inset-y-0">
                    <img className='w-full h-full object-cover' src="/assets/slider_1.png" alt="" />
                    <div className="content absolute top-1/2 left-48 -translate-x-1/2 -translate-y-1/2">
                        <div className="title text-6xl">Content 1</div>
                    </div>
                </div>
                
            </div>
            <div className="thumbnail absolute bottom-10 right-10 w-max flex items-center z-20">
                <div className="item flex-shrink-0">
                    <img src="/assets/thumbnail_1.png" alt="" />
                </div>
                <div className="item flex-shrink-0">
                    <img src="/assets/thumbnail_2.png" alt="" />
                </div>
                <div className="item flex-shrink-0">
                    <img src="/assets/thumbnail_3.png" alt="" />
                </div>
            </div>
            <div className="arrows z-20 absolute top-[80%] left-[20%] flex gap-10">
                <div id="prev" className='bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center bg-opacity-60'>P</div>
                <div id="next" className='bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center bg-opacity-60'>R</div>
            </div>
        </div>
    </div>
    */
