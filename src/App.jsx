import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import { ReactLenis, useLenis } from 'lenis/react'
import Console from "./Pages/Console"
import StorePage from "./Pages/StorePage"
import Loader from "./Pages/Loader"
import WorldMap from "./Pages/WorldMap"
import { useContext } from "react"
import { LoadingContext } from "./context/LoadingContext"
import NextSection from "./Pages/NextSection"



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
      <NextSection/>   
      <StorePage/>
      <WorldMap />
    </ReactLenis>
  )
}

export default App
