import clsxm from '@/utils/clsx';
import * as React from 'react';
import EarthCanvas from '../three/earth';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  projectPage?: boolean;
}

const Layout = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className={clsxm(
        'mx-auto min-h-screen max-w-[700px] pt-20 shadow backdrop-blur-[2px] max-md:pt-28'
      )}
    >
      <EarthCanvas />

      <div>{children}</div>
    </motion.div>
  );
};

export default Layout;
