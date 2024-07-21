// src/components/GameInfo.js
import React, { useState } from 'react';

const games = [
  {
    image: 'detective_pikachu.png',
    title: 'Detective Pikachu™ Returns',
    description: 'Dive back into Ryme City! Strange events are happening, and only our favorite detective can solve the case. Are you ready for a journey packed with suspense and surprises? Join Pikachu and Tim Goodman as they unravel a new mystery filled with unexpected twists and turns.',
    rating: 4.5,
    downloads: '1 Million +',
  },
  {
    image: 'mario_odyssey.png',
    title: 'Super Mario Odyssey',
    description: 'Join Mario on a massive, globe-trotting 3D adventure! Use his incredible new abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser\'s wedding plans!',
    rating: 4.8,
    downloads: '10 Million +',
  },
  {
    image: 'zelda_breath_of_the_wild.png',
    title: 'The Legend of Zelda: Breath of the Wild',
    description: 'Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.',
    rating: 4.9,
    downloads: '15 Million +',
  },
  {
    image: 'splatoon_2.png',
    title: 'Splatoon 2',
    description: 'Ink-splatting action is back and fresher than ever! Get hyped for the return of Splatoon 2, with new stages, new fashions, new weapons, and new ways to play.',
    rating: 4.3,
    downloads: '8 Million +',
  },
];

const ConsoleNext = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextGame = () => {
    setCurrentIndex((currentIndex + 1) % games.length);
  };

  const prevGame = () => {
    setCurrentIndex((currentIndex - 1 + games.length) % games.length);
  };

  const { image, title, description, rating, downloads } = games[currentIndex];

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <div className="image-section mb-4">
          <img className="w-64 h-64" src={`/assets/${image}`} alt={title} />
        </div>
        <div className="text-section text-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-2">{description}</p>
          <div className="mt-4 flex justify-center items-center">
            <div className="rating mr-4">⭐ {rating}</div>
            <div className="downloads">{downloads}</div>
          </div>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Direct Download</button>
        </div>
        <div className="mt-4 flex justify-between w-full">
          <button className="px-4 py-2 bg-gray-200 rounded" onClick={prevGame}>Previous</button>
          <button className="px-4 py-2 bg-gray-200 rounded" onClick={nextGame}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ConsoleNext;
