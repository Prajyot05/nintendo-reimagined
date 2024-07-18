import React, { useEffect, useRef, useState } from 'react';

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
        { image: '/assets/slider_1.png', name: 'Pokemon' },
        { image: '/assets/slider_2.png', name: 'Mario' },
        { image: '/assets/slider_1.png', name: 'Pokemon' },
        { image: '/assets/slider_2.png', name: 'Mario' },
        { image: '/assets/slider_1.png', name: 'Pokemon' },
        { image: '/assets/slider_2.png', name: 'Mario' },
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
            list.appendChild(list.firstChild);
            list.classList.add('next');
        } else {
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
        <div className="carousel w-full h-screen overflow-hidden relative">
            <div className="list" ref={listRef}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`item w-[10rem] h-[10rem] absolute top-[80%] left-[70%] transform -translate-y-[70%] rounded-3xl ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className="content absolute top-1/2 left-20 -translate-y-1/2 w-[5rem] hidden">
                            <div className="name text-[6rem] uppercase font-bold opacity-0">{item.name}</div>
                        </div>
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