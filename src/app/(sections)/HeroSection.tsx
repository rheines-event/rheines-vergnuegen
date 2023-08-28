import Image from 'next/image';

import { HeroTitle } from './HeroTitle';


export function HeroSection() {
  return (
    <article className="relative flex flex-col items-center min-h-screen pt-8">
      <Image
        src="/hero.jpg"
        alt="Foto aus dem Inneren der Location"
        className="object-cover -z-10"
        fill />
      <div className="flex-1 pt-24">
        <CTOButton />
      </div>
      <HeroTitle />
    </article>
  );
}

function CTOButton() {
  return (
    <a
      href="#"
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
    </a>
  );
}
