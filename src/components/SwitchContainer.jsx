import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useState, Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import SwitchModel from './SwitchModel'

function Switch() {
  return (
    <Canvas className='bg-transparent absolute -mt-48'>
        <Suspense fallback={null}>
            <ambientLight intensity={3} />
            <OrbitControls enableRotate={false} enableZoom={false} />
            <SwitchModel />
        </Suspense>
        {/* <Environment preset="night" /> */}
        {/* Preset Options: apartment, city, dawn, forest, lobby, night, park, studio, sunset, warehouse */}
    </Canvas>
  )
}

export default Switch