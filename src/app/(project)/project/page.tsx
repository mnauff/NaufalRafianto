import { Heading } from '@/components/ui/Heading'
import ProjectContainer from '@/container/ProjectContainer'
import StarsContainer from '@/container/StarsContainer'
import { prisma } from '@/lib/prisma'
import React from 'react'

export const metadata = {
    title: 'Project Page',
}

const Page = async () => {
    const data: Project[] = await prisma.project.findMany()
    return (
        <StarsContainer className="h-screen ">
            <div className="flex flex-col gap-10">
                <Heading className="text-center text-3xl">Project Overview</Heading>
                <ProjectContainer data={data} />
            </div>
        </StarsContainer>
    )
}

export default Page
