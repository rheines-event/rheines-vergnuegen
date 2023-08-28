'use client';

import * as React from 'react';
import { MouseEventHandler, useEffect, useState } from 'react';
import Link from 'next/link';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import * as Portal from '@radix-ui/react-portal';

import { classNames } from '@rheine/(utils)/classNames';
import { Logo } from './Logo';


const LINKS = {
  primary: [
    { href: '/#service', title: 'Service' },
    { href: '/#location', title: 'Location' },
    { href: '/#contact', title: 'Kontakt' }
  ],
  secondary: [
    { href: '/impressum', title: 'Impressum' },
    { href: '/datenschutz', title: 'Datenschutz' }
  ]
};


type NavigationProps = {
  opened: boolean;
  onClose: () => void;
  className?: string;
};
export function Navigation({ opened, onClose, className }: NavigationProps) {

  const containerVariant: Variants = {
    hidden: {
      x: -useWidth(),
      transition: {
        ease: 'easeInOut',
        when: 'beforeChildren'
      }
    },
    visible: {
      x: 0,
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.15
      }
    }
  };

  const wordVariants: Variants = {
    hidden: {
      transition: {
        staggerChildren: 0.035,
      }
    },
    visible: {
      transition: {
        staggerChildren: 0.035,
      }
    }
  };

  const letterVariants: Variants = {
    hidden: {
      y: 128,
    },
    visible: {
      y: 0,
      transition: {
        duration: .6,
        ease: 'easeInOut',
      }
    }
  };

  return (
    <Portal.Root asChild>
      <AnimatePresence>
        {opened && (
          <motion.nav
            key="navigation"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={classNames(
              className,
              "flex flex-col gap-y-4 px-4 pb-8 bg-white/90 text-slate-800"
            )}>
            <div className="flex w-full justify-between pr-8 py-16">
              <a href="/">
                <Logo mode="dark" />
              </a>
              <button onClick={onClose}>
                <XMark className="w-10 h-10" />
              </button>
            </div>
            {LINKS.primary.map(({ href, title }) => (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className="hover:underline">
                <motion.p
                    className="flex overflow-hidden"
                    variants={wordVariants}>
                    {title.split('').map((char, i) => (
                    <motion.span
                      className="mb-4 text-[5rem] leading-[.85] tracking-tighter font-body"
                      transition={{ delay: i * 0.1 }}
                      variants={letterVariants}
                      key={`${title}-char-at-${i}`}>
                      {char}
                    </motion.span>
                  ))}
                  </motion.p>
              </Link>
            ))}
            <div className="pt-16">
              {LINKS.secondary.map(({ href, title }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:underline"
                  onClick={onClose}>
                  <motion.p
                    className="flex overflow-hidden"
                    variants={wordVariants}>
                    {title.split('').map((char, i) => (
                    <motion.span
                      className="mb-4 text-5xl tracking-tighter font-serif italic font-thin"
                      transition={{ delay: i * 0.1 }}
                      variants={letterVariants}
                      key={`${title}-char-at-${i}`}>
                      {char}
                    </motion.span>
                  ))}
                  </motion.p>
                </Link>

              ))}
            </div>
            <div className="pt-16 pb-8 pr-4 text-end">
              <CTOButton onClick={onClose} />
            </div>
          </motion.nav>
        )}
     </AnimatePresence>
    </Portal.Root>
  );
}


function XMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}>
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}


function CTOButton({ onClick }: { onClick?: MouseEventHandler }) {
  return (
    <Link 
      onClick={onClick}
      href={{ pathname: '/', hash: 'contact', query: { cta: 'booking' } }}
      className="bg-white/10 text-slate-800 px-4 py-2 font-sans text-xl mr-2 hover:mr-0 transition-[margin-right]">
      Event veranstalten
      <svg
        className="inline-block ml-4"
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L19 6M19 6L13 11M19 6H0" stroke="currentColor" strokeWidth={1.5} />
      </svg>
    </Link>
  );
}

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
      //make sure it set properly on the first load (before resizing)
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
      // the next line for linters, so they won't give a warning
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // empty
  return width;
};
