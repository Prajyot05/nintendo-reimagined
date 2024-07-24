import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import { ReactLenis, useLenis } from 'lenis/react'
import Console from "./pages/Console"
import StorePage from "./pages/StorePage"
import Loader from "./pages/Loader"
import WorldMap from "./pages/WorldMap"
import { useContext } from "react"
import { LoadingContext } from "./context/LoadingContext"
// import StarryMouse from "./components/StarryMouse1"
// import StarryMouse from "./components/StarryMouse2"
import StarryMouse from "./components/StarryMouse"
import FooterPage from "./pages/FooterPage"
import Menubar from "./components/Menubar"
import NavbarParent from "./components/NavbarParent"


const App = () => {

  const {isLoading, setIsLoading} = useContext(LoadingContext)

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <StarryMouse />  
      <Loader />
      <NavbarParent/>
      <div className={`fixed ${isLoading && 'hidden'} w-full h-full z-[99]`}>
        <CanvasContainer/>
      </div>    
      <HomePage/>
      <Console/>
      <StorePage/>
      <WorldMap />
      <FooterPage />
    </ReactLenis>
  )
}

export default App
