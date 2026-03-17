import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './GamesGallery.css'

gsap.registerPlugin(ScrollTrigger);

const games = [
  {
    title: 'Animal Crossing',
    genre: 'Simulation',
    color: '#7FC8A9',
    img: '/assets/slider_1_bg.jpg',
  },
  {
    title: 'Mario Kart 8',
    genre: 'Racing',
    color: '#ED5F55',
    img: '/assets/slider_2_bg.jpg',
  },
  {
    title: 'Zelda: TOTK',
    genre: 'Adventure',
    color: '#46BADD',
    img: '/assets/slider_3_bg.jpg',
  },
  {
    title: 'Smash Bros',
    genre: 'Fighting',
    color: '#FFD700',
    img: '/assets/slider_4_bg.png',
  },
  {
    title: 'Pokémon Legends',
    genre: 'RPG',
    color: '#9B59B6',
    img: '/assets/slider_5_bg.jpg',
  },
  {
    title: 'Splatoon 3',
    genre: 'Shooter',
    color: '#E74C3C',
    img: '/assets/footer_img_1.avif',
  },
  {
    title: 'Metroid Dread',
    genre: 'Action',
    color: '#2ECC71',
    img: '/assets/footer_img_3.avif',
  },
  {
    title: 'Fire Emblem',
    genre: 'Strategy',
    color: '#3498DB',
    img: '/assets/footer_img_5.avif',
  },
];

function GamesGallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    // Title animation
    gsap.from('.games-gallery-title', {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
      }
    });

    // Horizontal scroll pinning
    gsap.to(track, {
      x: -scrollWidth,
      ease: 'none',
      force3D: true, // Hardware accelerate translation
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Parallax effect on each card's background
    gsap.utils.toArray('.game-card-bg').forEach((bg) => {
      gsap.to(bg, {
        x: '-20%',
        ease: 'none',
        force3D: true, // Hardware accelerate translation
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="games-gallery-section relative z-[101] overflow-hidden">
      <div className="games-gallery-header text-center pt-20 pb-10">
        <h2 className="games-gallery-title text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-bold text-white">
          Featured <span className="text-gradient">Games</span>
        </h2>
        <p className="games-gallery-title text-gray-400 text-sm md:text-lg mt-4 px-8">
          Explore our incredible library of titles
        </p>
      </div>

      <div ref={trackRef} className="games-track flex gap-8 px-8 pb-20 will-change-transform">
        {games.map((game, index) => (
          <div
            key={index}
            className="game-card group relative flex-shrink-0 w-[80vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] h-[50vh] md:h-[60vh] rounded-[2rem] overflow-hidden cursor-pointer"
          >
            {/* Background image with parallax */}
            <div
              className="game-card-bg absolute inset-0 w-[130%] h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${game.img})` }}
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at center, ${game.color}, transparent 70%)` }}
            ></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                style={{ backgroundColor: game.color + '33', color: game.color, border: `1px solid ${game.color}55` }}
              >
                {game.genre}
              </span>
              <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                {game.title}
              </h3>
              <div className="flex items-center gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="text-white/60 text-sm">Learn more</span>
              </div>
            </div>

            {/* Card number */}
            <div className="absolute top-6 right-6 text-white/10 text-6xl md:text-8xl font-bold leading-none pointer-events-none">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GamesGallery
