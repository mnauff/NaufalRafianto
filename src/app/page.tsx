import Earth from '@/components/model/Earth'
import StarsContainer from '@/container/StarsContainer'
import * as React from 'react'

export default function Home() {
    return (
        <StarsContainer className="h-screen">
            <Earth />
        </StarsContainer>
    )
}
