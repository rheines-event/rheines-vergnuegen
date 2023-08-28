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
    <div className="w-full px-4 pb-8">
      <motion.h2
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: .5, ease: 'easeInOut' }}
        className="mb-2 text-sm leading-[1.5] text-white font-extralight font-sans">
        Rheines-Event GmbH präsentiert
      </motion.h2>
      <h1 className="sr-only">Rheines Vergnügen</h1>
      <h2 className="-mb-8 text-[96px] leading-[1.1] tracking-tighter text-white overflow-hidden">
        <AnimatedLetters text="Rheines" /><br/>
      </h2>
      <h2 className="pb-24 text-[96px] leading-[1.1] tracking-tighter text-white overflow-hidden">
        <AnimatedLetters text="Vergnügen" charClassName="" />
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
      y: 128,
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
          transition={{ delay: i * 0.1 }}
          variants={letterVariants}
          className={charClassName}
          key={`${text}-char-at-${i}`}>
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

