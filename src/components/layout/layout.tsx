import clsxm from '@/utils/clsx';
import * as React from 'react';
import EarthCanvas from '../three/earth';
import Footer from './footer';

interface Props {
  children: React.ReactNode;
  projectPage?: boolean;
}

const Layout = ({ children }: Props) => {
  return (
    <div
      className={clsxm(
        'mx-auto min-h-screen max-w-[700px] pt-20 shadow backdrop-blur-[2px] max-md:pt-28'
      )}
    >
      <EarthCanvas />

      <div>{children}</div>
    </div>
  );
};

export default Layout;
