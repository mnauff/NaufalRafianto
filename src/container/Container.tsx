import Header from '@/components/ui/Header'
import React from 'react'
import StarsContainer from './StarsContainer'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <StarsContainer className="flex h-screen w-screen justify-center">
                <div className="absolute z-50 min-h-screen max-w-[700px] pt-20 shadow backdrop-blur-[2px] max-md:pt-28">
                    {children}
                </div>
            </StarsContainer>
        </div>
    )
}
