import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { VANTA } from 'vanta'
import CLOUDS from 'vanta/dist/vanta.clouds.min'

function Clouds() {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        // Attach THREE to the window object
        if (!window.THREE) {
            window.THREE = THREE
        }

        if (!vantaEffect && myRef.current) {
            try {
                const effect = VANTA.CLOUDS({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    backgroundColor: 0x161616,
                    skyColor: 0xff4b4b,
                    cloudColor: 0xcbffff,
                    // texturePath: "./gallery/noise.png"
                })
                console.log('VANTA effect initialized:', effect)
                setVantaEffect(effect)
            } catch (error) {
                console.error('VANTA initialization error:', error)
            }
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div ref={myRef} className='clouds-container' style={{ height: '100vh' }}>Clouds</div>
    )
}

export default Clouds