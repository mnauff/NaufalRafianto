import Layout from '@/components/layout/layout';
import Section from '@/components/layout/section';
import Link from '@/components/link/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { ProjectList, ProjectProps } from '@/utils/data';
import Image from 'next/image';

const Index = () => {
  const router = useRouter();
  const { title } = router.query;
  const filteringData = ProjectList.filter((item) => item.title === title);
  const [filter, setFilter] = React.useState<ProjectProps | null>(
    filteringData.length ? filteringData[0] : null
  );

  return (
    <Layout>
      <div className='inline-flex items-center space-x-2 max-md:pl-3'>
        <Link
          href='/project'
          className='font-secondary text-xl font-bold text-accent'
          isStyled
        >
          Project
        </Link>
        <div className='mt-2 inline-flex'>
          <MdKeyboardArrowRight className='mt-1' />
          {title}
        </div>
      </div>
      <Section size={'small'}>
        {filter && (
          <div key={filter.title}>
            <p className='max-md:text-justify'>{filter.detail}</p>
            <div className='flex flex-col'>
              <div className='inline-flex space-x-2 pb-3 pl-10 pt-10 max-md:pl-2'>
                <span className='rounded bg-accent p-1 text-sm font-bold uppercase text-red-200'>
                  Website
                </span>
                <Link href={filter.link} isStyled>
                  {filter.link}
                </Link>
              </div>
              {filter.stack && (
                <div className='inline-flex space-x-2 pl-10 max-md:pl-2'>
                  <span className='rounded bg-accent p-2 text-sm font-bold uppercase text-red-200 '>
                    Stack
                  </span>
                  <div>{filter.stack.join(', ')}.</div>
                </div>
              )}
            </div>
          </div>
        )}
      </Section>
      <div className='mt-20'>
        <h1 className='my-10 text-center font-secondary text-3xl font-bold uppercase'>
          Gallery
        </h1>
        <div className='grid  max-h-screen grid-cols-2 space-y-3'>
          {filter?.galery.map((image, index) => (
            <Image
              src={image}
              key={`gallery-image-${index}`}
              alt={`Gallery Image ${index}`}
              width={300}
              height={300}
              className='inline'
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
