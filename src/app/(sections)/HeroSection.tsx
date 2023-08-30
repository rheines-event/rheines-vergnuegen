import Link from 'next/link';

import { HeroTitle } from './HeroTitle';


export function HeroSection() {
  return (
    <article className="relative flex flex-col justify-between items-center pt-8 min-h-[560px] h-screen">

      <video
        loop
        muted
        autoPlay
        playsInline
        className="absolute h-full w-full mt-[-env(safe-area-inset-top)] object-cover inset-0 brightness-50">
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="z-30 my-24 lg:my-28">
        <CTOButton />
      </div>

      <HeroTitle />
    </article>
  );
}

function CTOButton() {
  return (
    <Link
      href={{ hash: 'contact-form', query: { cta: 'booking' } }}
      className="bg-white/10 text-white px-4 py-2 rounded-full border border-white font-sans hover:bg-white/30">
      Event veranstalten
      <svg
        className="inline-block ml-2"
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L19 6M19 6L13 11M19 6H0" stroke="white" />
      </svg>
    </Link>
  );
}
