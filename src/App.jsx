import NavBar from "./components/NavBar"
import HomePage from "./Pages/HomePage"
import CanvasContainer from "./components/CanvasContainer"
import Console from "./Pages/Console"
import NextSection from "./Pages/NextSection"



const App = () => {


  return (
    <>
      <div className=" fixed w-full h-full z-[99]">
        <CanvasContainer/>
      </div>    
      <NavBar/>
      <HomePage/>
      <Console/>  
      <NextSection/>
    </>
  )
}

export default App
