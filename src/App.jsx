import NavBar from "./components/NavBar"
import HomePage from "./Pages/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import { ReactLenis, useLenis } from 'lenis/react'
import Console from "./Pages/Console"
import StorePage from "./Pages/StorePage"
import WorldMap from "./Pages/WorldMap"
import GamesGallery from "./Pages/GamesGallery"
import { lazy, Suspense, useContext, useEffect, useState, useRef } from "react"
import { LoadingContext } from "./context/LoadingContext"
import StarryMouse from "./components/StarryMouse"
import FooterPage from "./Pages/FooterPage"
import Menubar from "./components/Menubar"
import NavbarParent from "./components/NavbarParent"
import Loader from "./Pages/Loader"


const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [isDelayOver, setIsDelayOver] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let timer;
    if (!isLoading) {
      timer = setTimeout(() => {
        setIsDelayOver(true);
      }, 1000);
    } else {
      setIsDelayOver(false);
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ReactLenis root>
      <StarryMouse />
      <Loader />
      <NavbarParent />

      {
        !isLoading && isDelayOver &&
        <>
          <div className="hidden lg:block">
            <div className={`fixed ${isLoading && 'hidden'} w-full h-full z-[99]`}>
              <CanvasContainer />
            </div>
          </div>
          <HomePage />

          <Console />
          <StorePage />
          <GamesGallery />
          <WorldMap />
          <FooterPage />

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className={`back-to-top fixed bottom-8 right-8 z-[200] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
              }`}
            aria-label="Back to top"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </>
      }
    </ReactLenis>
  )
}

export default App
