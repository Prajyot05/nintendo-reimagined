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
    // camera={{
    //     position: [-1.100000000000002,-10.549999999999978,0.050000000000000044,],
    //   }}
    >
        <Nintendo_switch/>
    </Canvas>
  )
}

export default CanvasContainer
