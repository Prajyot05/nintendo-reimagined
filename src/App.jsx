import { ScrollControls, Scroll} from "@react-three/drei"


function App() {

  return (
    <>
      <color attach="background" args={['#0d0d0d']}/>
      <ambientLight intensity={2} />
      <spotLight position={0, 25, 0} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001}/>
      <ScrollControls pages={6} damping={0.1}>
        {/* No Scroll fixed components*/}
        <Scroll>
         {/* Scrollable 3d components */}
        </Scroll>
        <Scroll html>
          Hola Amigo
        </Scroll>
      </ScrollControls>
      
    </>
  )
}

export default App
