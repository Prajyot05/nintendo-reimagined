import NavBar from "./components/NavBar"
import HomePage from "./Pages/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import Page2 from "./pages/Page2"
import { ReactLenis, useLenis } from 'lenis/react'
import Console from "./Pages/Console"
import ConsoleNext from "./Pages/ConsoleNext"


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
      <Page2 />
    </ReactLenis>
  )
}

export default App
