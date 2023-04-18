import Link from '@/components/link/link';
import { socialData } from '@/utils/data';
import Image from 'next/image';
import React from 'react';

const Index = () => {
  return (
    <div className='mx-auto flex min-h-screen max-w-xl justify-center bg-white bg-opacity-5 pt-20 shadow backdrop-blur'>
      <div className='mx-auto flex w-full flex-col space-y-5'>
        <div className='mx-auto h-32 w-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-white hover:opacity-75'>
          <Image
            src='/images/image-profile.jpg'
            alt='profile image'
            width={128}
            height={128}
            className='h-full w-full object-cover'
          />
        </div>
        <defs>
          <pattern
            id='img1'
            patternUnits='userSpaceOnUse'
            width='100'
            height='100'
          >
            <image
              href='/images/image-profile.jpg'
              x='0'
              y='0'
              width='100'
              height='100'
            />
          </pattern>
        </defs>

        <h1 className='text-center'>Naufal</h1>
        {socialData.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              key={item.name}
              className='mx-auto inline-flex w-3/4 items-center justify-start gap-5 rounded bg-white p-3 shadow hover:bg-opacity-90'
            >
              <Icon className='text-2xl text-red-600' />
              <h1 className='text-xl font-bold text-black'>{item.name}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
