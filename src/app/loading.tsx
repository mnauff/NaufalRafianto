import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const loading = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-black">
            <FaSpinner className="animate-spin" />
        </div>
    )
}

export default loading
