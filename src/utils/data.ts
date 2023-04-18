import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { IconType } from 'react-icons/lib';

export interface ProjectProps {
  type: string;
  title: string;
  detail: string;
  thumbnail: string;
  galery: string[];
  link: string;
  stack: string[];
}
export interface SocialProps {
  name: string;
  href: string;
  icon: IconType;
}

export const ProjectList: ProjectProps[] = [
  {
    type: 'web',
    title: 'TEDxITS',
    detail:
      'A website that builds to accommodate the TEDxITS campaign. Like merch selling, ticket selling, and promoting the event TEDxITS.',
    thumbnail: '/images/project-1/thumbnail.png',
    link: 'https://www.tedxits.org/',
    stack: ['NextJS', 'Typescript', 'TailwindCSS', 'NodeJS'],
    galery: [
      '/images/project-1/gallery (1).png',
      '/images/project-1/gallery (2).png',
      '/images/project-1/gallery (3).png',
      '/images/project-1/gallery (4).png',
      '/images/project-1/gallery (5).png',
      '/images/project-1/gallery (6).png',
    ],
  },
];

export const socialData: SocialProps[] = [
  {
    name: 'My Website',
    icon: CgWebsite,
    href: 'https://www.mnr.vercel.app/',
  },
  {
    name: 'Instagram',
    icon: BsInstagram,
    href: 'https://www.instagram.com/naufal.rafianto/',
  },
  {
    name: 'Github',
    icon: BsGithub,
    href: 'https://github.com/naufalRafianto',
  },
  {
    name: 'LinkedIn',
    icon: BsLinkedin,
    href: 'https://www.linkedin.com/in/naufal-rafianto-4159a8206/',
  },
];
