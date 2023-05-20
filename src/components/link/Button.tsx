import { merge } from '@/lib/merge'
import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode
    className: string
    type: 'button' | 'submit'
}

const Button = ({ children, className, type, ...props }: ButtonProps) => {
    return (
        <button
            type={type}
            className={merge('rounded bg-green-700 bg-opacity-30 text-green-500', className)}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
