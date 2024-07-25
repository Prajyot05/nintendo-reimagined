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
        {
            logo: '/assets/slider_1_logo.jpg',
            card_logo: '/assets/slider_1_card_logo.png',
            backgroundImg: '/assets/slider_1_bg.jpg',
            title: 'Detective Pikachu™ Returns',
            description: 'Dive back into Ryme City! Strange events are happening, and only our favorite detective can solve the case. Are you ready for a journey packed with suspense and surprises? Join Pikachu and Tim Goodman as they unravel a new mystery filled with unexpected twists and turns.',
            rating: 4.5,
            downloads: '1 Million +',
        },
        {
            logo: '/assets/slider_2_logo.jpeg',
            card_logo: '/assets/slider_2_card_logo.png',
            backgroundImg: '/assets/slider_2_bg.jpg',
            title: 'Super Mario Odyssey',
            description: 'Join Mario on a massive, globe-trotting 3D adventure! Use his incredible new abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser\'s wedding plans!',
            rating: 4.8,
            downloads: '10 Million +',
        },
        {
            logo: '/assets/slider_3_logo.jpg',
            card_logo: '/assets/slider_3_card_logo.webp',
            backgroundImg: '/assets/slider_3_bg.jpg',
            title: 'The Legend of Zelda',
            description: 'Step into a vast and beautiful world! Strange events are unfolding, and only Link can uncover the secrets. Are you ready for an adventure filled with mystery and wonder? Join Link as he explores breathtaking landscapes and faces formidable challenges in a quest to save Hyrule.',
            rating: 4.9,
            downloads: '15 Million +',
        },
        {
            logo: '/assets/slider_4_logo.avif',
            card_logo: '/assets/slider_4_card_logo.png',
            backgroundImg: '/assets/slider_4_bg.png',
            title: 'Super Smash Bros',
            description: 'The Super Smash Bros. series is a crossover series of multiplayer fighting games in which many well-known Nintendo characters are pitted against each other to fight, with each character using their unique abilities in battle. Gather your friends for the ultimate showdown Its time to smash together!',
            rating: 4.8,
            downloads: '10 Million +',
        },
        {
            logo: '/assets/slider_5_logo.jpg',
            card_logo: '/assets/slider_5_card_logo.png',
            backgroundImg: '/assets/slider_5_bg.jpg',
            title: 'Pokemon: Legends Arceus',
            description: 'Get ready for a new kind of grand, Pokémon adventure in Pokémon™ Legends: Arceus, a new game from Game Freak that blends action and exploration with the RPG roots of the Pokémon series.',
            rating: 4.6,
            downloads: '8 Million +',
        },
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
        <div className="carousel w-full h-[110vh] overflow-x-hidden relative z-[101]">
            <SwitchNav />
            <div className="list" ref={listRef}>
                {items.map((item, index) => (
                    <div key={index} className={`item w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] absolute top-[85%] left-[70%] transform -translate-y-[70%] rounded-3xl ${index === currentIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${item.backgroundImg})`, overflow: 'hidden' }}>

                        {/* <div style={{ content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1}}></div> */}

                        <div className={`${index === currentIndex ? 'absolute' : 'hidden'}`} style={{ content: '""', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1}}></div>

                        <img className={`${index !== currentIndex ? 'absolute' : 'hidden'} absolute w-full ${index === 0 ? 'top-10' : index === 4 || index === 2 ? 'top-5' : 'top-0'} ${index === 3 && 'scale-50 top-0'} left-0`} src={item.card_logo} alt="" />

                        <SliderMain logo={item.logo} title={item.title} description={item.description} rating={item.rating} downloads={item.downloads} />                        
                    </div>
                ))}
            </div>

            <div className="arrows absolute bottom-5 left-5 lg:bottom-20 lg:left-28">
                <button className="prev-btn w-[6rem] h-[6rem] flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 border-none outline-none text-xl font-bold" onClick={handleBtnClick} disabled={isBtnDisabled} ref={prevBtnRef}>
                    <div className="prev-in p-5 rounded-full border-2 border-gray-400">
                        <img className='rotate-180 w-[2rem]' src="/assets/arrow.svg" alt="" />
                    </div>
                </button>
                <button className="next-btn ml-10 w-[6rem] h-[6rem] flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 border-none outline-none text-xl font-bold" onClick={handleBtnClick} disabled={isBtnDisabled} ref={nextBtnRef}>
                    <div className="next-in p-5 rounded-full  border-2 border-gray-400">
                        <img className='w-[2rem]' src="/assets/arrow.svg" alt="" />
                    </div>
                </button>
            </div>

            {/* <div className="timeRunning" ref={runningTimeRef}></div> */}
        </div>
    );
};

export default Carousel;