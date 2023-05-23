'use client'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ProjectDetails {
    data: Project[]
}

const ProjectContainer = ({ data }: ProjectDetails) => {
    const router = useRouter()
    const type = ['all', 'website', 'mobile']
    const [selectedFilter, setSelectedFilter] = React.useState<string>('all')
    const [filteredData, setFilteredData] = React.useState<Project[]>(data)

    React.useEffect(() => {
        if (selectedFilter === 'all') {
            setFilteredData(data)
        } else {
            const filtered = data.filter((data) => data.type === selectedFilter)
            setFilteredData(filtered)
        }
    }, [selectedFilter])
    return (
        <div>
            <div className="inline-flex items-center justify-start space-x-4 py-5 max-md:ml-5">
                <span>Filter by:</span>
                {type.map((type) => {
                    return (
                        <div key={type} className="text-sm">
                            {selectedFilter === type ? (
                                <Button
                                    color="first"
                                    className="px-2 py-1 "
                                    type="button"
                                    onClick={() => setSelectedFilter(type)}
                                >
                                    {type.toUpperCase()}
                                </Button>
                            ) : (
                                <button
                                    className="text-secondary  focus:outline-none"
                                    onClick={() => setSelectedFilter(type)}
                                >
                                    {type.toUpperCase()}
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
                            className="flex h-[405px] w-[305px] items-center justify-center rounded bg-pink-700 hover:bg-gradient-to-br hover:from-pink-500 hover:via-violet-500 hover:to-cyan-500"
                            onClick={() => router.push(`/project/${item.id}`)}
                        >
                            <div className="grid h-[400px] w-[300px] cursor-pointer grid-rows-2 rounded border-opacity-0 bg-black p-7 ">
                                <div className="h-2/5 w-full cursor-pointer bg-white duration-300 hover:scale-110">
                                    <Image width={480} height={270} src={item.thumbnail} alt="project image" />
                                </div>
                                <div className="mt-[-12.5px] space-y-4  ">
                                    <h1 className="font-secondary text-center text-2xl font-bold">{item.title}</h1>
                                    <p className=" text-justify text-sm">{item.detail}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectContainer
