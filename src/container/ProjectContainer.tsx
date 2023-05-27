'use client'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Toaster, toast } from 'react-hot-toast'

interface ProjectDetails {
    data: Project[]
}

const ProjectContainer = ({ data }: ProjectDetails) => {
    const router = useRouter()
    const type = ['all', 'website', 'mobile']
    const [selectedFilter, setSelectedFilter] = React.useState<string | string[]>('all')
    const [filteredData, setFilteredData] = React.useState<Project[]>(data)

    React.useEffect(() => {
        if (selectedFilter === 'all') {
            setFilteredData(data)
        } else {
            const filtered = data.filter((data) => data.type === selectedFilter)
            setFilteredData(filtered)
        }
    }, [selectedFilter])

    function setType(type: string | string[]) {
        setSelectedFilter(type)
        if (filteredData.length === 0) {
            toast.error('Project is not Found')
        }
    }
    return (
        <div className="flex flex-col gap-5">
            <div className="mx-auto flex h-[3rem] w-1/2 items-center justify-center space-x-4 rounded bg-white bg-opacity-10 px-5 max-md:ml-5">
                {type.map((type) => {
                    return (
                        <div key={type}>
                            {selectedFilter === type ? (
                                <Button
                                    color="first"
                                    className="px-2 py-1 capitalize"
                                    type="button"
                                    onClick={() => setType(type)}
                                >
                                    {type}
                                </Button>
                            ) : (
                                <button className="capitalize focus:outline-none" onClick={() => setType(type)}>
                                    {type}
                                </button>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className="max-md:flex max-md:flex-col max-md:items-center">
                {filteredData.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="flex h-[405px] w-[305px] items-center justify-center rounded bg-pink-700 bg-gradient-to-br from-pink-500 via-violet-500 to-cyan-500"
                            onClick={() => router.push(`/project/${item.id}`)}
                        >
                            <div className="grid h-[400px] w-[300px] cursor-pointer grid-rows-2 rounded  bg-black p-7 hover:bg-opacity-75 ">
                                <div className="h-1/2 w-full cursor-pointer bg-white duration-300 hover:scale-110 hover:shadow">
                                    <Image
                                        width={480}
                                        height={320}
                                        src={item.thumbnail}
                                        alt="project image"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mt-[-12.5px] space-y-4  ">
                                    <h1 className="font-secondary text-center text-2xl font-bold">{item.title}</h1>
                                    <p className=" text-justify text-sm">{item.detail}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="z-50">
                    {filteredData.length === 0 && <Toaster position="top-center" reverseOrder={false} />}
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer
