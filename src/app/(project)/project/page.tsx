import { Heading } from '@/components/ui/Heading'
import ProjectContainer from '@/container/ProjectContainer'
import StarsContainer from '@/container/StarsContainer'
import { prisma } from '@/lib/prisma'
import React from 'react'

export const metadata = {
    title: 'Project',
}

const Page = async () => {
    const data: Project[] = await prisma.project.findMany()
    return (
        <StarsContainer className="h-screen">
            <Heading className="text-center">Project Overview</Heading>
            <ProjectContainer data={data} />
        </StarsContainer>
    )
}

export default Page
