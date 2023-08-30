import type { Metadata } from 'next';
import { Bellefair, Forum, Kantumruy_Pro, Spectral } from 'next/font/google';

import { classNames } from '@rheine/(utils)/classNames';
import { Footer } from './(components)/Footer';
import { Titlebar } from './(components)/Titlebar';


import './globals.css';


const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bellefair',
});

const forum = Forum({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-forum',
});

const kantumruyPro = Kantumruy_Pro({
  subsets: ['latin'],
  variable: '--font-kantumruy-pro',
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: '300',
  style: 'italic',
  variable: '--font-spectral'
});

export const metadata: Metadata = {
  title: 'Rheines Vergnügen',
  description: 'Ihre exklusive Event-Location in Rheine',
  viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body
        style={{ margin: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)' }}
        className={classNames(
          bellefair.variable,
          forum.variable,
          kantumruyPro.variable,
          spectral.variable,
          "relative font-body"
        )}>
        <Titlebar className="fixed inset-x-0 top-0 z-50" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
