<<<<<<< HEAD
import Content from '@/container/ContentContainer'
import StarsContainer from '@/container/StarsContainer'
=======
'use client'
import Content from '@/container/ContentContainer'
import StarsContainer from '@/container/StarsContainer'
import Lottie from 'lottie-react'
>>>>>>> 9494b62a42473ac2bd7e00691d86c4286e7be35a
import React from 'react'
import AnimationData from '../../../public/404/404.json'
import { StyledLink } from '@/components/ui/link/Link'
import { Heading } from '@/components/ui/Heading'
import { Metadata } from 'next'
<<<<<<< HEAD
import LottiePlayer from '@/components/lottie/Lottie'
=======
>>>>>>> 9494b62a42473ac2bd7e00691d86c4286e7be35a
export const metadata: Metadata = {
    title: 'Page not Found',
}
const Page = () => {
    return (
        <StarsContainer className="h-screen">
            <Content size="medium" flex={true} className="flex-col">
<<<<<<< HEAD
                <LottiePlayer AnimationData={AnimationData} />
=======
                <Lottie animationData={AnimationData} />
>>>>>>> 9494b62a42473ac2bd7e00691d86c4286e7be35a
                <div className="text-center">
                    <Heading>The page that you access is not found</Heading>
                    <StyledLink href="/">Please back on track</StyledLink>
                </div>
            </Content>
        </StarsContainer>
    )
}

export default Page
