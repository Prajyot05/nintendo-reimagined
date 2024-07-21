import React, { useEffect, useRef, useState } from 'react';
import SwitchNav from './SwitchNav';
import SliderMain from './SliderMain';
import './Slider.css'

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const listRef = useRef(null);
    // const runningTimeRef = useRef(null);
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    const handleBtnClick = () => {
        setIsBtnDisabled(true);
        setTimeout(() => {
            setIsBtnDisabled(false);
        }, 1000);
    };

    const items = [
        {logo: '/assets/slider_1_logo.jpg', backgroundImg: '/assets/slider_1_bg.jpg', title: 'Detective Pikachu' },
        {logo: '/assets/slider_2_logo.jpeg', backgroundImg: '/assets/slider_2_bg.jpg', title: 'Super Mario' },
        {logo: '/assets/slider_3_logo.jpg', backgroundImg: '/assets/slider_3_bg.jpg', title: 'Legends of Zelda' },
        {logo: '/assets/slider_4_logo.avif', backgroundImg: '/assets/slider_4_bg.png', title: 'Super Smash Bros' },
        {logo: '/assets/slider_5_logo.jpg', backgroundImg: '/assets/slider_5_bg.jpg', title: 'Pokemon: Legends Arceus' },
    ];

    // let runTimeOut;
    // let runNextAuto;

    // const timeRunning = 3000;
    // const timeAutoNext = 7000;

    useEffect(() => {
        const nextBtn = nextBtnRef.current;
        const prevBtn = prevBtnRef.current;

        const handleNextClick = () => showSlider('next');
        const handlePrevClick = () => showSlider('prev');

        nextBtn.addEventListener('click', handleNextClick);
        prevBtn.addEventListener('click', handlePrevClick);

        // Start the initial animation
        // resetTimeAnimation();
        // runNextAuto = setTimeout(() => {
        //     nextBtn.click();
        // }, timeAutoNext);

        return () => {
            nextBtn.removeEventListener('click', handleNextClick);
            prevBtn.removeEventListener('click', handlePrevClick);
            // clearTimeout(runTimeOut);
            // clearTimeout(runNextAuto);
        };
    }, []);

    // const resetTimeAnimation = () => {
    //     const runningTime = runningTimeRef.current;
    //     runningTime.style.animation = 'none';
    //     runningTime.offsetHeight; /* trigger reflow */
    //     runningTime.style.animation = null;
    //     runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    // };

    const showSlider = (type) => {
        const list = listRef.current;
        const nextBtn = nextBtnRef.current;
        const prevBtn = prevBtnRef.current;

        nextBtn.classList.add('disabled');
        prevBtn.classList.add('disabled');

        if (type === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            list.appendChild(list.firstChild);
            list.classList.add('next');
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
            list.prepend(list.lastChild);
            list.classList.add('prev');
        }

        // clearTimeout(runTimeOut);

        // runTimeOut = setTimeout(() => {
        //     list.classList.remove('next');
        //     list.classList.remove('prev');
        //     nextBtn.classList.remove('disabled');
        //     prevBtn.classList.remove('disabled');
        // }, timeRunning);

        // clearTimeout(runNextAuto);
        // runNextAuto = setTimeout(() => {
        //     nextBtn.click();
        // }, timeAutoNext);

        // resetTimeAnimation();
    };

    return (
        <div className="carousel w-full h-screen overflow-x-hidden relative">
            <SwitchNav />
            <div className="list" ref={listRef}>
                {items.map((item, index) => (
                    <div key={index} className={`item w-[10rem] h-[10rem] absolute top-[80%] left-[70%] transform -translate-y-[70%] rounded-3xl ${index === currentIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${item.backgroundImg})`, overflow: 'hidden' }}>

                        {/* <div style={{ content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1}}></div> */}

                        <div className={`${index === currentIndex + 1 ? 'absolute' : 'hidden'}`} style={{ content: '""', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1}}></div>

                        <SliderMain logo={item.logo} title={item.title} />                        
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button className="prev w-[3rem] h-[3rem] rounded-full bg-gray-600 border-none outline-none text-xl font-bold" onClick={handleBtnClick} disabled={isBtnDisabled} ref={prevBtnRef}>P</button>
                <button className="next w-[3rem] h-[3rem] rounded-full bg-gray-600 border-none outline-none text-xl font-bold" onClick={handleBtnClick} disabled={isBtnDisabled} ref={nextBtnRef}>N</button>
            </div>

            {/* <div className="timeRunning" ref={runningTimeRef}></div> */}
        </div>
    );
};

export default Carousel;