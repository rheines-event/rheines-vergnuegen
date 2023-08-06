'use client';

import { motion, Variants } from 'framer-motion';


export function HeroTitle() {
  return (
    <div className="w-full px-4">
      <motion.h2
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-2 text-sm leading-[1.5] text-white font-extralight font-sans">
        Rheines-Event GmbH präsentiert
      </motion.h2>
      <h1 className="text-[96px] leading-[.8] tracking-tighter text-white">
        {/* <span>Rheines</span><br/>
        <span>Vergnügen</span> */}

        <AnimatedString value="Rheines" /><br/>
        <AnimatedString value="Vergnügen" />
      </h1>
    </div>
  );

  function AnimatedString({ value }: { value: string }) {
    
    const wordVariants: Variants = {
      hidden: {
        transition: {
          staggerChildren: 0.1,
        }
      },
      visible: {
        transition: {
          staggerChildren: 0.1,
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
        {value.split('').map((char, i) => (
          <motion.p
            transition={{ delay: i * 0.1 }}
            variants={letterVariants}
            key={`${value}-char-at-${i}`}>
            {char}
          </motion.p>
        ))}
      </motion.span>
    );
  }
}

export function HeroTitleAnimated() {
  return (
    <div className="w-full px-4">
      <h2 className="mb-2 text-sm leading-[1.5] text-white font-extralight font-sans">
        Rheines-Event GmbH präsentiert
      </h2>
      <h1 className="text-[96px] leading-[.8] tracking-tighter text-white">
        <span>Rheines</span><br/>
        <span>Vergnügen</span>
      </h1>
    </div>
  );
}
