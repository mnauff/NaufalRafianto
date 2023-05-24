/* eslint-disable react/no-unknown-property */
'use client'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as React from 'react'
import CanvasLoader from './CanvasLoader'

const Model = () => {
    const gltf = useLoader(GLTFLoader, '/earth/scene.gltf')
    return (
        <mesh>
            <primitive object={gltf.scene} scale={0.35} position-y={0} rotation-y={0} rotation-x={-0.25} />
        </mesh>
    )
}

const Earth = () => {
    return (
        <div className=" z-20 grid h-[25vh] cursor-grabbing">
            <Canvas
                frameloop="demand"
                gl={{ preserveDrawingBuffer: true }}
                shadows
                dpr={[1, 2]}
                camera={{ position: [0, 0, 4], fov: 9 }}
            >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        autoRotate
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Model />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Earth
