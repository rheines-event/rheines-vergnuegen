'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

import { classNames } from '@rheine/(utils)/classNames';


export function HeroTitle() {

  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationDone(true), 5000);
  }, []);

  return (
    <div className="z-10 w-full px-8 max-w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-full 2xl:px-24 lg:mx-auto lg:px-0 pb-8">
      <motion.h2
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: .5, ease: 'easeInOut' }}
        className="text-sm lg:text-xl leading-[1.5] text-white font-extralight font-sans">
        Rheines-Event GmbH präsentiert
      </motion.h2>
      <h1 className="sr-only">R(h)eines Vergnügen</h1>
      <h2 className="w-fit relative -mb-8 text-[80px] sm:text-[96px] md:text-[128px] lg:text-[160px] leading-[1.1] h-26 md:h-32 lg:h-40 tracking-tighter text-white">
        <AnimatedLetters text="Rheines" charClassName="z-10" /><br/>
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 418 42"
          className="absolute left-0 -bottom-1 ml-2 -rotate-3 h-[0.17em] w-full stroke-[#D6C5B5] stroke-[8] fill-none"
          preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 3, duration: 2, ease: 'easeInOut' }}
            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></motion.path>
        </motion.svg>
      </h2>
      <h2 className="mb-24 text-[80px] sm:text-[96px] md:text-[128px] lg:text-[160px] leading-[1.1] h-28 md:h-36 lg:h-44 tracking-tighter text-white">
        <AnimatedLetters text="Vergnügen"charClassName="z-10 " />
      </h2>
      <ChevronDown className={classNames(
        "mx-auto transition-opacity", !animationDone && "opacity-0"
      )} bounce={animationDone} />
    </div>
  );
}


function AnimatedLetters({ text, charClassName }: { text: string, charClassName?: string }) {
  
  const wordVariants: Variants = {
    hidden: { },
    visible: {
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
      }
    }
  };

  const letterVariants: Variants = {
    hidden: {
      y: 160,
    },
    visible: {
      y: 0,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      }
    }
  };

  return (
    <motion.span
      variants={wordVariants}
      initial="hidden"
      animate="visible"
      className="inline-flex overflow-hidden">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${text}-char-at-${i}`}
          transition={{ delay: i * 0.1 }}
          variants={letterVariants}
          className={`
            ${charClassName}
            ${char === 'h' ? 'text-gray-100 opacity-50' : ''}
            last:pr-1 !overflow-visible
          `}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}



function ChevronDown({ bounce = false, className }: { bounce?: boolean, className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      opacity={0.5}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="white"
      fill="none"
      className={classNames("w-8 h-8", className, bounce && 'motion-safe:animate-bounce')}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

