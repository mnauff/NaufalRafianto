import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: '_blank';
  rel?: string;
  isButton?: boolean;
  isLogo?: boolean;
  isStyled?: boolean;
}

const Link = ({
  children,
  href,
  className,
  target,
  rel,
  isButton,
  isLogo,
  isStyled,
}: LinkProps) => {
  const router = useRouter();
  const isInternalLink = href.startsWith('/') || href.startsWith('#');

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (isInternalLink) {
      router.push(href);
    } else {
      window.open(href, target ?? '_blank', rel);
    }
  };

  const linkElement = isButton ? (
    <button
      className={clsx(
        'z-0 inline-flex items-center rounded bg-accent px-3 py-2 font-bold tracking-wide hover:bg-opacity-75'
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  ) : (
    <a
      href={href}
      onClick={handleClick}
      className={clsx(
        className,
        {
          'relative z-[1000] after:absolute after:bottom-0 after:left-0  after:h-[2px] after:w-0 after:rounded after:bg-accent after:duration-300 after:hover:w-full':
            !isButton && !isLogo && isStyled,
        },
        { '': !isStyled }
      )}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );

  return linkElement;
};

export default Link;
