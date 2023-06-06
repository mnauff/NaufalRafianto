import { Heading } from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'
import { UnstyledLink } from '@/components/ui/link/Link'
import ProjectContainer from '@/container/ProjectContainer'
import StarsContainer from '@/container/StarsContainer'
import { prisma } from '@/lib/prisma'
import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'

export const metadata = {
    title: 'Project Page',
}

async function getData() {
    return await prisma.project.findMany()
}

const Page = async () => {
    const data: Project[] = await getData()
    return (
        <StarsContainer className="h-screen ">
            <div className="flex flex-col gap-10">
                <Heading className="text-center text-3xl">Project Overview</Heading>
                <ProjectContainer data={data} />
                <UnstyledLink href="/contact" className="mx-auto">
                    <Button type="button" className="gap-2 px-3 py-2" color="second">
                        <span>Contact Me!</span>
                        <HiOutlineMail fontSize={24} />
                    </Button>
                </UnstyledLink>
            </div>
        </StarsContainer>
    )
}

export default Page
