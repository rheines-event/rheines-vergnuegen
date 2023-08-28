import Link from 'next/link';

import { Logo } from './Logo';


export function Footer() {
  return (
    <footer className="relative lg:max-w-4xl lg:mx-auto lg:px-0 flex flex-col px-4 py-16 text-lg text-white bg-[#171717] font-sans">
      <ul className="py-16">
        <li>
          <Link
            href="/datenschutz"
            className="mb-8 text-5xl tracking-tight font-serif font-light italic">
            Datenschutz
          </Link>
        </li>
        <li>
          <a
            href="/impressum"
            className="mb-8 text-5xl tracking-tight font-serif font-light italic">
            Impressum
          </a>
        </li>
      </ul>
      <div className="flex flex-col gap-4 items-center py-6">
        <Logo mode="white" />
        <span className="font-light">© {new Date().getFullYear()} Rheines-Event GmbH</span>
      </div>
    </footer>
  );
}
