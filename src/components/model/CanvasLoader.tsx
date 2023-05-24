import { Html } from '@react-three/drei'
import * as React from 'react'
import { FaSpinner } from 'react-icons/fa'

const CanvasLoader = () => {
    return (
        <Html as="div" center className="flex items-center justify-center">
            <p className="text-xl text-white ">
                <FaSpinner className="animate-spin" />
            </p>
        </Html>
    )
}

export default CanvasLoader
