import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import { ReactLenis, useLenis } from 'lenis/react'
import Console from "./pages/Console"
import ConsoleNext from "./pages/ConsoleNext"


const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <div className="fixed hidden w-full h-full z-[999]">
        <CanvasContainer/>
      </div>    
      <NavBar/>
      <HomePage/>
      <Console/>
      <ConsoleNext/>
    </ReactLenis>
  )
}

export default App
