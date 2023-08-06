import { MouseEventHandler } from 'react';

import Image from 'next/image';
import { classNames } from '@rheine/(utils)/classNames';
import { HeroTitle } from './HeroTitle';


export function HeroSection() {
  return (
    <article className="relative flex flex-col items-center min-h-screen py-8">
      <Image
        src="/hero.jpg"
        alt="Foto aus dem Inneren der Location"
        className="object-cover -z-10"
        fill />
      <div className="flex-1 pt-24">
        <CTOButton />
      </div>
      <HeroTitle />
      <div className="pt-8">
        <ChevronDown bounce />
      </div>
    </article>
  );
}

function CTOButton({ onClick }: { onClick?: MouseEventHandler }) {
  return (
    <button
      onClick={onClick}
      className="bg-white/10 text-white px-4 py-2 rounded-full border border-white font-sans">
      Event veranstalten
      <svg
        className="inline-block ml-2"
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L19 6M19 6L13 11M19 6H0" stroke="white" />
      </svg>
    </button>
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
      className={classNames("w-8 h-8", className, bounce && 'animate-bounce')}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
