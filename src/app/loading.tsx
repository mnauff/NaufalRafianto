import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const loading = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-black text-center text-9xl max-md:text-5xl">
            <FaSpinner className="animate-spin" />
            <h1>Loading</h1>
        </div>
    )
}

export default loading
