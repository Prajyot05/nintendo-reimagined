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


const App = () => {

  const {isLoading, setIsLoading} = useContext(LoadingContext)

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <Loader />
      <div className={`fixed hidden ${isLoading && 'hidden'} w-full h-full z-[999]`}>
        <CanvasContainer/>
      </div>    
      <NavBar/>
      <HomePage/>
      <Console/>
      <StorePage/>
      <WorldMap />
    </ReactLenis>
  )
}

export default App
