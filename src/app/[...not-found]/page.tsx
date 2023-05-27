import Content from '@/container/ContentContainer'
import StarsContainer from '@/container/StarsContainer'
import React from 'react'
import AnimationData from '../../../public/404/404.json'
import { StyledLink } from '@/components/ui/link/Link'
import { Heading } from '@/components/ui/Heading'
import { Metadata } from 'next'
import LottiePlayer from '@/components/lottie/Lottie'
export const metadata: Metadata = {
    title: 'Page not Found',
}
const Page = () => {
    return (
        <StarsContainer className="h-screen">
            <Content size="medium" flex={true} className="flex-col">
                <LottiePlayer AnimationData={AnimationData} />
                <div className="text-center">
                    <Heading>The page that you access is not found</Heading>
                    <StyledLink href="/">Please back on track</StyledLink>
                </div>
            </Content>
        </StarsContainer>
    )
}

export default Page
