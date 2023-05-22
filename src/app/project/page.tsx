import Button from '@/components/link/Button'
import { UnstyledLink } from '@/components/link/Link'
import ProjectContainer from '@/container/ProjectContainer'
import StarsContainer from '@/container/StarsContainer'
import { prisma } from '@/lib/prisma'
import { Metadata } from 'next'
import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'

export const metadata: Metadata = {
    title: 'MNR | Project',
    description: "Project page that I've done",
}

const Page = async () => {
    const data = await prisma.project.findMany()
    return (
        <StarsContainer className="h-screen">
            <ProjectContainer data={data} />
            <div className="flex w-full justify-center py-5">
                <UnstyledLink href="/send-letter">
                    <Button type="button" className="gap-2 px-3 py-2" color="first">
                        <span>Send me a letter</span>
                        <MdOutlineEmail fontSize={24} />
                    </Button>
                </UnstyledLink>
            </div>
        </StarsContainer>
    )
}

export default Page
