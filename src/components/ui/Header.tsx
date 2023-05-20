import React from 'react'
import { StyledLink, UnstyledLink } from '../link/Link'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
    return (
        <header className="fixed z-50 flex w-full items-center justify-center  gap-56 bg-white bg-opacity-0 p-2.5 shadow backdrop-blur-md max-md:gap-16">
            <div className=" inline-flex cursor-pointer items-center gap-2 text-2xl font-bold ">
                <UnstyledLink href="/">mnr</UnstyledLink>
            </div>
            <div className="inline-flex items-center gap-4">
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/project">Project</StyledLink>
                <div className="inline-flex items-center gap-2">
                    <StyledLink href="https://github.com/NaufalRafianto/portfolio-website">Source</StyledLink>
                    <FaGithub />
                </div>
            </div>
        </header>
    )
}
