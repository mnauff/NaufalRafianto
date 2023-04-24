import React from 'react';
import Link from '../link/link';
import { FaGithub } from 'react-icons/fa';
import { BsRocket } from 'react-icons/bs';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

const Header = () => {
  return (
    <header className='fixed z-10 flex w-full items-center justify-center  gap-56 bg-white bg-opacity-0 p-2.5 shadow backdrop-blur-md max-md:gap-16'>
      <div
        className={`${pacifico.className} inline-flex cursor-pointer items-center gap-2 text-2xl font-bold `}
      >
        <BsRocket className=' duration-300 hover:translate-y-[-10px]' />
        <Link href='/' isLogo>
          mnr
        </Link>
      </div>
      <div className='inline-flex items-center gap-4'>
        <Link href='/' isStyled>
          Home
        </Link>
        <Link href='/project' isStyled>
          Project
        </Link>
        <div className='inline-flex items-center gap-2'>
          <Link href='https://github.com/naufalRafianto' isStyled>
            Github
          </Link>
          <FaGithub />
        </div>
      </div>
    </header>
  );
};

export default Header;
