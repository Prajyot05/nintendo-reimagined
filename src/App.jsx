import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import { ReactLenis, useLenis } from 'lenis/react'
import Console from "./pages/Console"
import StorePage from "./pages/StorePage"
import Loader from "./pages/Loader"
import WorldMap from "./pages/WorldMap"
import { useContext, useEffect, useState } from "react"
import { LoadingContext } from "./context/LoadingContext"
import StarryMouse from "./components/StarryMouse"
import FooterPage from "./pages/FooterPage"
import Menubar from "./components/Menubar"
import NavbarParent from "./components/NavbarParent"


const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  const {isLoading, setIsLoading} = useContext(LoadingContext);
  const [isDelayOver, setIsDelayOver] = useState(false);

  useEffect(() => {
    let timer;
    if (!isLoading) {
      timer = setTimeout(() => {
        setIsDelayOver(true);
      }, 1000); // 2 seconds delay
    } else {
      setIsDelayOver(false);
    }
    
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <ReactLenis root>
      <StarryMouse />  
      <Loader />
      <NavbarParent/>
      
      {
        !isLoading && isDelayOver && 
        <>
        <div className={`fixed ${isLoading && 'hidden'} hidden sm:flex w-full h-full z-[99]`}>
          <CanvasContainer/>
        </div> 
          <HomePage/>
          
          <Console/>
          <StorePage/>
          <WorldMap />
          <FooterPage />
        </>
      }
    </ReactLenis>
  )
}

export default App
