/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

interface props {
  detail: string;
  title: string;
  img: string;
}

const ProjectCard: React.FC<props> = ({ detail, img, title }) => {
  return (
    <div className=' grid h-[400px] w-[300px] cursor-pointer grid-rows-2 rounded border-2 border-black border-opacity-0 bg-white bg-opacity-5 p-7 hover:border-2 hover:border-accent hover:shadow'>
      <div className='h-2/5 w-full cursor-pointer bg-white duration-300 hover:scale-110'>
        <Image width={400} height={300} src={img} alt='project image' />
      </div>
      <div className='mt-[-12.5px] space-y-4  '>
        <h1 className='text-center font-secondary text-2xl font-bold'>
          {title}
        </h1>
        <p className=' text-justify text-sm'>{detail}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
