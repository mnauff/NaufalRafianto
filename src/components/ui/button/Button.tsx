import { merge } from '@/lib/merge'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className: string
    type: 'button' | 'submit'
}

const Button = ({ children, className, type, ...props }: ButtonProps) => {
    return (
        <button
            type={type}
            className={merge(
                'flex items-center justify-center rounded bg-violet-700 bg-opacity-30 text-violet-500 hover:bg-violet-500 hover:text-white',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
