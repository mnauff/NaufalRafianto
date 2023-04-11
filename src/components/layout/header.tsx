import React from 'react';
import Link from '../link/link';
import { FaGithub } from 'react-icons/fa';
import { BsRocket } from 'react-icons/bs';
import { motion } from 'framer-motion';
const Header = () => {
  return (
    <header className='fixed z-10 flex w-full items-center justify-center  gap-56 bg-white bg-opacity-0 p-2.5 shadow backdrop-blur-md max-md:gap-16'>
      <motion.div whileHover={{ x: 50, transition: { duration: 300 } }}>
        <div className='inline-flex cursor-pointer items-center gap-2 font-secondary font-bold uppercase'>
          <BsRocket />
          <Link href='/' isLogo>
            mnr
          </Link>
        </div>
      </motion.div>
      <div className='inline-flex items-center gap-4'>
        <Link href='/' isStyled>
          Home
        </Link>
        <Link href='/project' isStyled>
          Project
        </Link>
        <div className='inline-flex items-center gap-2'>
          <Link href='/' isStyled>
            Github
          </Link>
          <FaGithub />
        </div>
      </div>
    </header>
  );
};

export default Header;
