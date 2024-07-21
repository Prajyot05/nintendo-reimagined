import React, { useState, useEffect, useRef } from 'react';

const images = [
    { url: '/assets/slider_1.png', name: 'Slider 1', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { url: '/assets/slider_2.png', name: 'Slider 2', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { url: '/assets/slider_1.png', name: 'Slider 3', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { url: '/assets/slider_2.png', name: 'Slider 4', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { url: '/assets/slider_1.png', name: 'Slider 5', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { url: '/assets/slider_2.png', name: 'Slider 6', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
];

const Slider = () => {
  const [items, setItems] = useState(images);
  const timeRunningRef = useRef(null);
  const [animation, setAnimation] = useState('');

  const timeRunning = 3000;
  const timeAutoNext = 7000;

  useEffect(() => {
    const runNextAuto = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto);
  }, [items]);

  const resetTimeAnimation = () => {
    if (timeRunningRef.current) {
      timeRunningRef.current.style.animation = 'none';
      timeRunningRef.current.offsetHeight; /* trigger reflow */
      timeRunningRef.current.style.animation = 'runningTime 7s linear 1 forwards';
    }
  };

  const showSlider = (type) => {
    setAnimation(type);
    setTimeout(() => setAnimation(''), timeRunning);

    if (type === 'next') {
      setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    } else {
      setItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, prevItems.length - 1)]);
    }

    resetTimeAnimation();
  };

  return (
    <div className="carousel w-full h-screen overflow-hidden relative">
      <div className={`list ${animation} relative h-full flex transition-transform duration-1000`}>
        {items.map((item, index) => (
          <SliderItem key={index} item={item} index={index} />
        ))}
      </div>

      <div className="arrows absolute bottom-5 w-full text-center z-10">
        <button className="prev border-none bg-none text-4xl text-white cursor-pointer px-5 transition duration-200 hover:text-green-400" onClick={() => showSlider('prev')}>{'<'}</button>
        <button className="next border-none bg-none text-4xl text-white cursor-pointer px-5 transition duration-200 hover:text-green-400" onClick={() => showSlider('next')}>{'>'}</button>
      </div>

      <div className="timeRunning absolute bottom-0 left-0 w-full h-1 bg-green-400 z-10" ref={timeRunningRef}></div>
    </div>
  );
};

const SliderItem = ({ item, index }) => (
  <div className="item relative flex-shrink-0 w-44 h-64 top-4/5 transform -translate-y-2/3 rounded-2xl shadow-2xl bg-center bg-cover transition duration-1000" style={{ backgroundImage: `url(${item.url})` }}>
    <div className={`content absolute top-1/2 left-24 transform -translate-y-1/2 w-100 text-left text-white ${index === 1 ? 'block' : 'hidden'}`}>
      <div className="title text-7xl uppercase text-green-400 font-bold leading-none opacity-0 animation-delay-300">{'SLIDER'}</div>
      <div className="name text-7xl uppercase font-light leading-tight opacity-0 animation-delay-600">{item.name}</div>
      <div className="des mt-2 font-light opacity-0 animation-delay-900">{item.description}</div>
      <div className="btn mt-2 opacity-0 animation-delay-1200">
        <button className="bg-green-400 border-none text-white py-2 px-4 text-sm font-light uppercase mr-5 mt-2 cursor-pointer transition duration-200 rounded hover:opacity-80">See More</button>
        <button className="bg-green-400 border-none text-white py-2 px-4 text-sm font-light uppercase mr-5 mt-2 cursor-pointer transition duration-200 rounded hover:opacity-80">Subscribe</button>
      </div>
    </div>
  </div>
);

export default Slider;