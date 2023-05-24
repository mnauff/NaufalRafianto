/* eslint-disable react/no-unknown-property */
'use client'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { merge } from '@/lib/merge'
import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.cjs'
import * as React from 'react'

function Stars({ ...props }) {
    const ref = React.useRef<THREE.Points>(null)
    const [sphere] = React.useState(() => Float32Array.from(random.inSphere(new Float32Array(5000), { radius: 1.2 })))
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y -= delta / 5
            ref.current.rotation.x -= delta / 5
            ref.current.rotation.z -= delta / 5
        }
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}

export default function StarsContainer({ children, className }: { children: React.ReactNode; className: string }) {
    return (
        <main className={merge('relative inset-0 w-screen', className)}>
            <Header />
            <div className="absolute -z-10 h-full w-full">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <React.Suspense fallback={null}>
                        <Stars />
                    </React.Suspense>
                    <Preload all />
                </Canvas>
            </div>
            <div className="mx-auto min-h-screen max-w-[700px] pt-20 shadow backdrop-blur-[2px] max-md:pt-28">
                <div>{children}</div>
                <Footer />
            </div>
        </main>
    )
}
