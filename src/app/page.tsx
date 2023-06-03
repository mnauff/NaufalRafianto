import Earth from '@/components/model/Earth'
import Content from '@/container/ContentContainer'
import StarsContainer from '@/container/StarsContainer'
import * as React from 'react'
import AnimationData from '../../public/assets/lottie/astronout/astronout.json'
import { Heading } from '@/components/ui/Heading'
import { StyledLink, UnstyledLink } from '@/components/ui/link/Link'
import Button from '@/components/ui/button/Button'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsRocket } from 'react-icons/bs'
import Image from 'next/image'
import LottiePlayer from '@/components/Lottie'
import { HiOutlineMail } from 'react-icons/hi'

export default function Home() {
    return (
        <StarsContainer className="h-auto">
            <div className="flex flex-col">
                <Earth />
                <Content size="small" flex={true}>
                    <div className="max-md:mx-auto max-md:text-center">
                        <Heading className="text-4xl max-md:text-3xl">
                            <div className="inline-flex">
                                <span>N</span>
                                <BsRocket className="cursor-pointer hover:text-blue-500" />
                                ufal Rafianto
                            </div>
                        </Heading>
                        <p className="max-md:text-sm">Freelance Developer (Website / Mobile)</p>
                    </div>
                    <div className="flex h-[8.5rem] w-[8.5rem] items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-blue-500 to-cyan-500 max-md:w-[8rem] ">
                        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full bg-black max-md:mx-auto max-md:h-[7.4rem] max-md:w-[7.5rem]">
                            <Image
                                src="https://vetveqguvymvlvhnmlzw.supabase.co/storage/v1/object/sign/profile%20pic/2f6e0998-002a-45f7-9732-0631f2156746.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHBpYy8yZjZlMDk5OC0wMDJhLTQ1ZjctOTczMi0wNjMxZjIxNTY3NDYuanBnIiwiaWF0IjoxNjg0Njc3MDA4LCJleHAiOjE3MTYyMTMwMDh9.1_Bp7MIu69qze5b9czkwNLj-ouZWhqmNMP9MrXc0Sow&t=2023-05-21T13%3A50%3A08.218Z"
                                alt="profile image"
                                width={128}
                                height={128}
                                className="absolute h-full w-full object-fill"
                            />
                            <LottiePlayer AnimationData={AnimationData} />
                        </div>
                    </div>
                </Content>
                <Content size="medium">
                    <Heading className="relative mb-5 ml-5 w-fit cursor-pointer text-start text-xl font-bold uppercase after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-blue-500 after:bg-opacity-50 after:hover:bg-opacity-100">
                        About Me
                    </Heading>
                    <p className="mx-auto w-[90%] text-justify font-light max-md:text-sm">
                        Hi there! I&apos;m Naufal, a freelance developer based on Indonesia. As a freelance web and
                        mobile developer with one year of experience, I am passionate about crafting high-quality
                        applications that meet my client&apos;s needs. I have a solid foundation in web development
                        technologies such as{' '}
                        <span className="text-blue-500">
                            {' '}
                            HTML, CSS, JavaScript, ReactJS, TailwindCSS, NextJS, NodeJS{' '}
                        </span>
                        etc. As well as experience in mobile app development using{' '}
                        <span className="text-blue-500">React Native</span>. I am constantly learning and keeping
                        up-to-date with the latest trends and best practices in the industry.
                    </p>
                    <div className="flex w-full justify-center py-5">
                        <UnstyledLink href="/project">
                            <Button type="button" className="gap-2 px-3 py-2" color="second">
                                <span>Check out my project</span>
                                <MdOutlineKeyboardArrowRight fontSize={24} />
                            </Button>
                        </UnstyledLink>
                    </div>
                </Content>
                <Content size="medium" className="-mt-10 max-md:mt-10">
                    <Heading className="relative mb-5 ml-5 w-fit cursor-pointer text-start text-xl font-bold uppercase after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-blue-500 after:bg-opacity-50 after:hover:bg-opacity-100">
                        Bio
                    </Heading>
                    <table className="table-fixed border-spacing-x-4">
                        <tbody>
                            <tr>
                                <td className="px-5  font-black text-pink-500">
                                    <Button color="second" type="button" className="px-2 py-1 max-md:py-2">
                                        2003
                                    </Button>
                                </td>
                                <td className="px-5 max-md:py-2">Born in Mataram City, Indonesia</td>
                            </tr>
                            <tr>
                                <td className="px-5  font-black text-pink-500">
                                    <Button color="second" type="button" className="px-2 py-1 max-md:py-2">
                                        2021
                                    </Button>
                                </td>
                                <td className="px-5 max-md:py-2">
                                    Began studying Bachelor of Computer Engineering at the{' '}
                                    <StyledLink href="https://www.its.ac.id/">
                                        Sepuluh Nopember Institute of Technology
                                    </StyledLink>
                                    .
                                </td>
                            </tr>
                            <tr>
                                <td className="px-5 font-black text-pink-500">
                                    <Button color="second" type="button" className="px-2 py-1">
                                        2023
                                    </Button>
                                </td>
                                <td className="px-5">Start freelancing</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-5 flex w-full justify-center     max-md:mt-10">
                        <UnstyledLink href="/contact">
                            <Button type="button" className="gap-2 px-3 py-2" color="second">
                                <span>Contact Me!</span>
                                <HiOutlineMail fontSize={24} />
                            </Button>
                        </UnstyledLink>
                    </div>
                </Content>
            </div>
        </StarsContainer>
    )
}
