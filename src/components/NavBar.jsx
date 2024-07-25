// NavBar.js
import React, { useContext, useRef, useState } from 'react';
import gsap from "gsap";
import { LoadingContext } from "../context/LoadingContext";

const NavBar = ({ toggleMenu, isOpen }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const { isLoading, setIsLoading } = useContext(LoadingContext);

    const switchImg1 = useRef(null);
    const switchImg2 = useRef(null);

    const isMobile = window.innerWidth <= 768;

    const handleClick = () => {
        setIsAnimating(true);

        gsap.to(".nav-mid img", {
            y: 0,
            duration: 0.2
        });

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

            setIsLoading(false)
        }

        setIsAnimating(false);

        if(!isLoading) toggleMenu();
    };

    const handleMouseEnter = () => {
        if (isAnimating) return;
        if(isMobile) return;

        gsap.to(switchImg1.current, {
            y: switchImg1.current.offsetWidth / 5,
            duration: 0.5
        });

        gsap.to(switchImg2.current, {
            y: switchImg2.current.offsetWidth / -5,
            duration: 0.5
        });
    };

    const handleMouseLeave = () => {
        if (isAnimating) return;
        if(isMobile) return;

        gsap.to(switchImg1.current, {
            y: 0,
            duration: 0.5
        });

        gsap.to(switchImg2.current, {
            y: 0,
            duration: 0.5
        });
    };

    return (
        <nav className="text-white flex w-full overflow-x-hidden p-4 items-center justify-between">
            <div className={`nav-left flex items-center text-lg gap-20 w-[30%]`}>
                <div className="nav-games flex items-center">
                    <img src="/assets/games.png" alt="" />
                    <h4>Games</h4>
                </div>
                <div className="nav-store flex items-center">
                    <img src="/assets/store.png" alt="" />
                    <h4>Store</h4>
                </div>
                <div className="search flex items-center justify-center bg-[#1c1d23] px-10 h-10 rounded-[30px] border border-[#32353c]">
                    <img src="/assets/search_left.png" alt="" />
                    <input type="text" placeholder='Search Games...' className="bg-transparent text-sm px-3 focus:outline-none hover:outline-none" />
                    <img src="/assets/search_right.png" alt="" />
                </div>
            </div>
            <div className="nav-mid flex scale-50 absolute z-[1001] left-[50vw] top-[4vw] -translate-x-1/2 -translate-y-1/2">
                <img ref={switchImg1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className="w-[15rem] mt-[150vh]" src="/assets/nintendo_switch_1.svg" alt="" />
                <img ref={switchImg2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className="w-[15rem] mt-[150vh]" src="/assets/nintendo_switch_2.svg" alt="" />
            </div>
            <div className="nav-right flex items-center w-[30%] justify-center gap-10">
                <div className="shop">
                    <img src="/assets/shopping_bag.png" alt="" />
                </div>
                <div className="nav-gold relative flex pl-2 pr-10 py-1 rounded-3xl bg-[#1c1d23] border border-[#32353c]">
                    <img src="/assets/gold_coin.png" alt="" />
                    <h4 className='pl-2'>69.000000</h4>
                    <img src="/assets/plus.png" className='absolute right-0 top-1/2 -translate-y-1/2 scale-150 translate-x-1' alt="" />
                </div>
                <div className="profile flex">
                    <img src="/assets/profile.png" alt="" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
