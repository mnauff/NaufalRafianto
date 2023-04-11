import Layout from '@/components/layout/layout';
import Link from '@/components/link/link';
import AstronautCanvas from '@/components/three/astronaut';

export default function FourOhFour() {
  return (
    <Layout>
      <div className='relative flex flex-col items-center'>
        <div className='absolute w-full'>
          <AstronautCanvas />
        </div>
        <div className='flex flex-col items-center justify-center gap-5'>
          <h1 className=' text-center font-secondary text-6xl uppercase'>
            You are lost
            <br /> Page is not Found
          </h1>
          <div className='z-[200] font-bold outline-2 outline-black'>
            Back to <Link href='/'>Home</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
