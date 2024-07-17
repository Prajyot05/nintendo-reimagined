import { Canvas } from "@react-three/fiber"
import Nintendo_switch from "./Nintendo_switch"
import { AmbientLight } from "three"
import { OrbitControls } from "@react-three/drei"

const CanvasContainer = () => {
  return (
    <Canvas>
        <ambientLight intensity={3}/>
        <OrbitControls/>
        <Nintendo_switch/>
    </Canvas>
  )
}

export default CanvasContainer
