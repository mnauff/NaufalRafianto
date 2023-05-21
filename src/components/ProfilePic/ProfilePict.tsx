'use client'

import React from 'react'
import Lottie from 'lottie-react'
import Animation from '../../../public/astronout/astronout.json'
import Image from 'next/image'
const ProfilePict = () => {
    return (
        <div className="max-md: flex h-[8.5rem] w-[8.5rem] items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500 max-md:w-[8rem]">
            <div className="relative h-32 w-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-full bg-black hover:opacity-75 max-md:mx-auto max-md:h-[7.4rem] max-md:w-[7.5rem]">
                <Image
                    src="https://vetveqguvymvlvhnmlzw.supabase.co/storage/v1/object/sign/profile%20pic/2f6e0998-002a-45f7-9732-0631f2156746.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlIHBpYy8yZjZlMDk5OC0wMDJhLTQ1ZjctOTczMi0wNjMxZjIxNTY3NDYuanBnIiwiaWF0IjoxNjg0Njc3MDA4LCJleHAiOjE3MTYyMTMwMDh9.1_Bp7MIu69qze5b9czkwNLj-ouZWhqmNMP9MrXc0Sow&t=2023-05-21T13%3A50%3A08.218Z"
                    alt="profile image"
                    width={128}
                    height={128}
                    className="absolute h-full w-full object-fill"
                />
                <Lottie animationData={Animation} />
            </div>
        </div>
    )
}

export default ProfilePict
