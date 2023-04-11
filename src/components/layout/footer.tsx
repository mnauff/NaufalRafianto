import React from 'react';
import Link from '../link/link';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='mt-20 flex h-12 items-center justify-center bg-opacity-5 p-5'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='flex gap-5'>
          <Link href='https://www.instagram.com/naufal.rafianto/'>
            <div className='flex h-7 w-7 items-center justify-center rounded-full bg-white text-black hover:bg-red-500 hover:text-white'>
              <BsInstagram />
            </div>
          </Link>
          <Link href='https://github.com/naufalRafianto' isButton={false}>
            <div className='flex h-7 w-7 items-center justify-center rounded-full bg-white text-black hover:bg-red-500 hover:text-white'>
              <FaGithub />
            </div>
          </Link>
        </div>
        <p>&copy; 2023 All rights reserved. Create by Naufal</p>
      </div>
    </footer>
  );
};

export default Footer;
