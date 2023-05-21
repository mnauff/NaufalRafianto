import Button from '@/components/link/Button'
import { UnstyledLink } from '@/components/link/Link'
import StarsContainer from '@/container/StarsContainer'
import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'

const Page = () => {
    return (
        <StarsContainer className="h-screen">
            <div>Project</div>
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
