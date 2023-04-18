import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import StarsCanvas from '@/components/three/star';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNavBar = router.pathname !== '/link-list';
  return (
    <>
      <StarsCanvas />
      {showNavBar && <Header />}
      <AnimatePresence initial={false} mode={'wait'}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      {showNavBar && <Footer />}
    </>
  );
}
