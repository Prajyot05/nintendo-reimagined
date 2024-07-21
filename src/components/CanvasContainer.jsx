import { Canvas } from "@react-three/fiber"
import Nintendo_switch from "./Nintendo_switch"
import { AmbientLight } from "three"
import { OrbitControls } from "@react-three/drei"
import{ gsap} from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const CanvasContainer = () => {
  return (
    <Canvas 
    >
        <Nintendo_switch/>
    </Canvas>
  )
}

export default CanvasContainer
