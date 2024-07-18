import NavBar from "./components/NavBar"
import HomePage from "./Pages/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import Console from "./Pages/Console"
import ConsoleNext from "./Pages/ConsoleNext"


const App = () => {


  return (
    <>
      <div className=" fixed w-full h-full z-[99]">
        <CanvasContainer/>
      </div>    
      <NavBar/>
      <HomePage/>
      <Console/>
      <ConsoleNext/>
    </>
  )
}

export default App
