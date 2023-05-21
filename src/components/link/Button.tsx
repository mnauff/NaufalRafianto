import { merge } from '@/lib/merge'
import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode
    className: string
    type: 'button' | 'submit'
    color?: 'first' | 'second'
}

const Button = ({ children, className, type, color, ...props }: ButtonProps) => {
    return (
        <button
            type={type}
            className={merge(
                'flex items-center justify-center rounded bg-opacity-30 hover:text-white',
                className,
                color === 'first'
                    ? 'bg-pink-700 text-pink-500 hover:bg-pink-500'
                    : color === 'second'
                    ? 'bg-violet-700 text-violet-500 hover:bg-violet-500'
                    : 'bg-cyan-700 text-cyan-500 hover:bg-cyan-500'
            )}
            {...props}
        >
            {children}
        </button>
    )
}
export default Button
