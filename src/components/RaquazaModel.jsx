import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import React, { useRef } from 'react';

function Rayquaza() {
  const rayquazaRef = useRef();
  const model = useLoader(GLTFLoader, '/models/raquazaModel/scene.gltf');

  useFrame(() => {
    if (rayquazaRef.current) {
      rayquazaRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={rayquazaRef} object={model.scene} />;
}

function RaquazaModel() {
  return (
    <Canvas>
        <ambientLight />
      <OrbitControls />
      {/* <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <Rayquaza />
    </Canvas>
  );
}

export default RaquazaModel;