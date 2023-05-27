import { Heading } from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'
import StarsContainer from '@/container/StarsContainer'
import React from 'react'

const Page = () => {
    return (
        <StarsContainer className="h-auto">
            <div className="space-y-5">
                <Heading className="text-center text-3xl">Contact Me</Heading>
                <form className="flex h-3/4 w-full flex-col gap-3">
                    <div className="flex w-full justify-between gap-3">
                        <input placeholder="Name" className="w-1/2" />
                        <input placeholder="Email" className="w-1/2" />
                    </div>
                    <input placeholder="Subject" />
                    <textarea placeholder="Message" className="h-96 max-md:h-48" />
                    <Button type="submit" className="px-5 py-2">
                        Submit
                    </Button>
                </form>
            </div>
        </StarsContainer>
    )
}

export default Page
