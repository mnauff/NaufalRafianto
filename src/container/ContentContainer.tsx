import { merge } from '@/lib/merge'
import React from 'react'

interface SectionProps {
    size: 'small' | 'medium' | 'large'
    flex?: true | false
    children: React.ReactNode
    className?: string
}

const Section = ({ size, children, flex, className }: SectionProps) => {
    const sectionClasses = merge(
        'mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-10 space-y-5',
        {
            'max-h-64': size === 'small',
            'max-h-96': size === 'medium',
            'max-h-[500px]': size === 'large',
        },
        {
            'flex justify-center items-center gap-10 max-md:flex max-md:gap-2 max-md:flex-col': flex === true,
            '': flex === false,
        },
        className
    )

    return <div className={sectionClasses}>{children}</div>
}

export default Section
