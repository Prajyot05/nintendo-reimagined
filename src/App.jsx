import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import { ReactLenis, useLenis } from 'lenis/react'
import Console from "./pages/Console"
import StorePage from "./pages/StorePage"
import Loader from "./pages/Loader"
import WorldMap from "./pages/WorldMap"
import { useContext } from "react"
import { LoadingContext } from "./context/LoadingContext"
import NextSection from "./pages/NextSection"

// import StarryMouse from "./components/StarryMouse1"
// import StarryMouse from "./components/StarryMouse2"
import StarryMouse from "./components/StarryMouse"
import FooterPage from "./pages/FooterPage"


const App = () => {

  const {isLoading, setIsLoading} = useContext(LoadingContext)

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <StarryMouse />
      <Loader />
      <div className={`fixed ${isLoading && 'hidden'} w-full h-full z-[99]`}>
        <CanvasContainer/>
      </div>    
      <NavBar/>
      <HomePage/>
      <Console/>  
      <NextSection/>   
      <StorePage/>
      <WorldMap />
      <FooterPage />
    </ReactLenis>
  )
}

export default App
