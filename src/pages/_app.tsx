import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import StarsCanvas from '@/components/three/star';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StarsCanvas />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
