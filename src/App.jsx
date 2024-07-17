import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import CanvasContainer from "./components/CanvasContainer"

const App = () => {

  return (
    <>
      <div className="fixed w-screen h-full z-[99]">
        {/* <CanvasContainer/> */}
      </div>
      
      <NavBar/>
      <HomePage/>
    </>
  )
}

export default App
