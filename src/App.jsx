import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import Page2 from "./pages/Page2"
import { ReactLenis, useLenis } from 'lenis/react'

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
      <div className="fixed hidden w-screen h-full z-[999]">
        <CanvasContainer/>
      </div>
      
      <NavBar/>
      <HomePage/>
      <Page2 />
    </ReactLenis>
  )
}

export default App
